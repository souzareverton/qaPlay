// @ts-check
const { test, expect } = require('@playwright/test');

// test.use({
//   viewport: {width: 1600, height: 1200},
// });

test.use({  // Para poder utilizar geolocalização nos testes, pode ser colocado em playwright.config.js
  geolocation: {longitude: 41.890221, latitude: 12.492348},
  permissions: ['geolocation'],
})

test.beforeEach(async ({page}) => {
  await page.goto('https://automationpratice.com.br/');
});

test('scroll item @scroll', async ({page})=> {

  const newsletter = await page.getByRole('heading', { name: 'NEWSLETTER' });
  
  await newsletter.scrollIntoViewIfNeeded();
  await expect(newsletter).toHaveText('NEWSLETTER');
  
});

test('scroll page @scroll', async ({page})=> {

  const button = await page.getByRole('button', { name: 'Send Mail' });
  
  await button.scrollIntoViewIfNeeded();
  await button.click();
  await expect(button).toBeVisible();
  
});

test('Login com sucesso @login', async ({ page }) => {
  
  await page.getByRole('link', { name: 'Login' }).click();
  // await page.screenshot({path: 'screenshot/screenshot.png'});
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.locator('#user').press('Tab');
  await page.locator('#password').fill('123456');
  // await page.locator('#password').screenshot({path: 'screenshot/elementoSenha.png'});
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.locator('h2.swal2-title')).toBeVisible();
  await expect(page.locator('h2.swal2-title')).toHaveText('Login realizado');
  await expect(page.locator('div.swal2-html-container')).toBeVisible();
  await expect(page.locator('div.swal2-html-container')).toHaveText('Olá, teste@gmail.com');
  await page.getByRole('button', {name: 'OK'}).click();
  await page.locator('.after_login').hover();
  await page.getByRole('link', {name: 'logout'}).click();
  await expect(page.locator('h2.swal2-title')).toHaveText('Logout Sucessfull');
});

test('Login com sucesso1', async ({ page }) => {
  
  await page.getByRole('link', { name: 'Login' }).click();
  // await page.screenshot({path: 'screenshot/screenshot.png'});
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.locator('#user').press('Tab');
  await page.locator('#password').fill('123456');
  // await page.locator('#password').screenshot({path: 'screenshot/elementoSenha.png'});
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.locator('h2.swal2-title')).toBeVisible();
  await expect(page.locator('h2.swal2-title')).toHaveText('Login realizado');
  await expect(page.locator('div.swal2-html-container')).toBeVisible();
  await expect(page.locator('div.swal2-html-container')).toHaveText('Olá, teste@gmail.com');
  await page.getByRole('button', {name: 'OK'}).click();
  await page.locator('.after_login').hover();
  await page.getByRole('link', {name: 'logout'}).click();
  await expect(page.locator('h2.swal2-title')).toHaveText('Logout Sucessfull');
});

// test('Geolocation', async ({ page, context }) => {
  // await context.setGeolocation({ longitude: 41.890221, latitude: 12.492348 });
  // await page.goto('https://www.google.com/maps');
  
  // await page.getByRole('textbox', { name: 'Pesquise no Google Maps' }).click();
  // await page.getByRole('textbox', { name: 'Pesquise no Google Maps' }).fill('41.890221,  12.492348');
  // await page.getByLabel('Pesquisar').click();
  // await page.locator('canvas').first().click({
  //   position: {
  //     x: 879,
  //     y: 339
  //   }
  // });
  // await expect(page.getByLabel('Endereço, Coliseu, Piazza del')).toHaveText('Coliseu, Piazza del Colosseo, 1, 00184 Roma RM, Itália');

// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
