let container = document.createElement('div');
container.style.cssText =
  "background: #0e0e0e;font-family: 'Dekko', cursive;box-sizing: border-box;height: 600px;width: 1340px;";
document.body.append(container);

let main = document.createElement('div');
main.style.cssText =
  'position: absolute; margin: 104px;width: 668px;height: 392px;background: #ffffff;margin-left: 337px;';
container.prepend(main);

let topi = document.createElement('div');
topi.style.cssText =
  'height: 53px;background: #a349a4;text-transform: uppercase;font-style: italic;line-height: 53px;padding-left:20px;color:#ffffff;font-size: 20px;';
topi.textContent = 'brand logo';
main.prepend(topi);

let bar = document.createElement('div');
bar.style.cssText = 'height: 27px;width: 33px;float: right;margin: 14px 20px;';
topi.prepend(bar);
let one = document.createElement('div');
one.style.cssText =
  'height: 6px;width: 30px;background: #ffffff;border-radius: 10px;margin-bottom: 3px;';
bar.prepend(one);

let two = document.createElement('div');
two.style.cssText =
  'height: 6px;width: 30px;background: #ffffff;border-radius: 10px;margin-bottom: 3px;';
bar.prepend(two);

let three = document.createElement('div');
three.style.cssText =
  'height: 6px;width: 30px;background: #ffffff;border-radius: 10px;margin-bottom: 3px;';
bar.prepend(three);

let middle = document.createElement('div');
middle.style.cssText = 'height: 299px;';
let h4 = document.createElement('h4');
h4.style.cssText =
  'text-transform: uppercase;margin-left: 220px;margin-top: 50px;color: #a349a4;letter-spacing: 0.5px;display: inline-block;font-size: 22px;font-weight: 500;';
h4.textContent = 'awesome description';
middle.prepend(h4);
main.append(middle);

let p = document.createElement('p');
p.style.cssText =
  'width: 465px;height: 90px;color: #ff7f27;border: 5px solid #a349a4;border-radius: 20px;display: inline-block;font-size: 17px;font-weight: 500;padding: 10px 24px;letter-spacing: 0.2px;line-height: 1.4;top: 47%;left: 50%; transform:translate(-50%, -50%);position: absolute;display: inline-block;';
p.textContent =
  '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam dolorum quam repellendus ducimus? Assumenda expedita sit facere dicta eos! Explicabo, quae repellendus similique ipsa porro at sequi blanditiis sunt.';

middle.append(p);

let down = document.createElement('div');
down.style.cssText =
  'height: 40px;background: #a349a4;line-height: 40px;padding-left: 16px;color: #ffffff;';
down.textContent = '@copyright, all rights reserved.';
main.append(down);
