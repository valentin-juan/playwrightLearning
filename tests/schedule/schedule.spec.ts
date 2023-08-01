import { test } from '@playwright/test';
import { domain, password, username } from '../schedule/schedule';

test('Login success', async ({ page }) => {
    await page.goto(`https://${domain}.vitaverse.com.br`);
    await page.fill('#username',`${username}`);
    await page.fill('#password',`${password}`);
    await page.getByRole('button', {name:'Acessar'}).click();
    await page.getByRole('alert', {name : 'Usuário logado com sucesso'});
});

test('Create schedule success', async ({page}) => {
    await page.goto(`https://${domain}.vitaverse.com.br`);
    await page.fill('#username',`${username}`);
    await page.fill('#password',`${password}`);
    await page.getByRole('button', {name:'Acessar'}).click();
    await page.getByRole('alert', {name : 'Usuário logado com sucesso'});

    //Aguarde até acessar a rota '/agenda'
    await page.waitForURL('**/agenda');

    await page.goto(`https://${domain}.vitaverse.com.br/agenda`);
    await page.getByRole('button', {name : 'Agendamento'}).click();

    // await page.getByRole('button', {name : 'Cliente'}).click();
})