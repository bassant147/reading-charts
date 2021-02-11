import { Selector} from 'testcafe';
import { ReactSelector } from 'testcafe-react-selectors';

fixture `Landing Page Tests`
    .page `http://localhost:3000`;

test('Add Chart Button exists', async t => {
    const buttonExists = Selector('button').exists;
    
    await t.expect(buttonExists).ok();
});

test('Should create a new chart for "Owned posts over time"', async t =>{
    await t.click('button')
           .click(Selector('.menuItem--0'))
           .expect(Selector('.chart').withAttribute('title', 'Owned posts over time').exists)
           .ok();
})

test('Should create a new chart for "Posts interactions over time"', async t =>{
    await t.click('button')
           .click(Selector('.menuItem--1'))
           .expect(Selector('.chart').withAttribute('title', 'Posts interactions over time').exists)
           .ok()
})

test('Should create a new chart for "Mentions sentiment analysis"', async t =>{
    await t.click('button')
           .click(Selector('.menuItem--2'))
           .expect(Selector('.chart').withAttribute('title', 'Mentions sentiment analysis').exists)
           .ok();
})