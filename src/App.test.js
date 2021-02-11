import { Selector } from 'testcafe';

fixture `Landing Page Tests`
    .page `http://localhost:3000`;

test('Add Chart Button exists', async t => {
    const buttonExists = Selector('button').exists;
    
    await t.expect(buttonExists).ok();
});

test('Should allow users to create a new chart', async t =>{
    await t.click('button');
    const menuItemNo1 = Selector('ul').child('li').withAttribute('key', /0/);

    await t.click(menuItemNo1);
    await t.wait(4000);
    const chart1 = ReactSelector('Bar').exists;
    await t.expect(chart1).ok();
})