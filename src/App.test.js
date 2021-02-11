import { Selector} from 'testcafe';
import { ReactSelector } from 'testcafe-react-selectors';

fixture `Landing Page Tests`
    .page `http://localhost:3000`;

test('Add Chart Button exists', async t => {
    const buttonExists = Selector('button').exists;
    
    await t.expect(buttonExists).ok();
});

test('Should create a new chart for "Owned posts over time"', async t =>{
    await t.click('button');

    const menuItemNo0 = Selector('.menuItem--0');
    await t.click(menuItemNo0);

    const chart0 = Selector('.chart--0').exists;
    await t.expect(chart0).ok();
})

test('Should create a new chart for "Posts interactions over time"', async t =>{
    await t.click('button');

    const menuItemNo1 = Selector('.menuItem--1');
    await t.click(menuItemNo1);

    const chart1 = Selector('.chart--1').exists;
    await t.expect(chart1).ok(); 
})

test('Should create a new chart for "Mentions sentiment analysis"', async t =>{
    await t.click('button');

    const menuItemNo2 = Selector('.menuItem--2');
    await t.click(menuItemNo2);

    const chart2 = Selector('.chart--2').exists;
    await t.expect(chart2).ok();
})

fixture `Debugger example`
    .page `http://devexpress.github.io/testcafe/example/`;

test('Debugger', async t => {
    await t
        .debug()
        .setNativeDialogHandler(() => true)
        .click('button');
});