import { expect, test } from '@playwright/test';
import { domain, password, title, username, failedPassword } from '../login/login';

/**
 * Função para acessar a página principal do Vitaverse, estando o projeto on,
 * Ele valida se o título da página é condizente com o do projeto
 * OBS: Variáveis estão dispostas no arquivo .ts (login.ts), linha 1 do arquivo
 */
test('Vitaverse online + título', async ({ page }) => {
    /** 
     * "goto" -> vai até a URL determinada
     * A variável 'domain' está informada em login.ts
    */
    await page.goto(`https://${domain}.vitaverse.com.br`);
    await expect(page).toHaveTitle(`${title}`);
});

/**
 * Valida se realizou o login com sucesso
 */
test('Login success', async ({ page }) => {
    await page.goto(`https://${domain}.vitaverse.com.br`);
    await page.fill('#username',`${username}`);
    await page.fill('#password',`${password}`);
    await page.getByRole('button', {name:'Acessar'}).click();
    await page.getByRole('alert', {name : 'Usuário logado com sucesso'});
});

/**
 * Valida se deu erro ao realizar o login, por username/password incorretos
 */
test('Login failed', async ({ page }) => {
    await page.goto(`https://${domain}.vitaverse.com.br`);
    await page.fill('#username',`${username}`);
    await page.fill('#password',`${failedPassword}`);
    await page.getByRole('button', {name : 'Acessar'}).click();
    await page.getByRole('alert', {name : 'Usuário ou senha inválidos!'});
});