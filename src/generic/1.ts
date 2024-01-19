/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise(): Promise<(string | number)[]> {
  //типізація return
  return new Promise<(string | number)[]>((resolve) => {
    //типізація resolve, так як це також return під капотом у проміса
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

export {};
