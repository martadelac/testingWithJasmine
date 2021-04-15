it("should calculate the monthly rate correctly", function () {
  const values = {
    amount: 10000,
    years: 10,
    rate: 4,
  };

  expect(calculateMonthlyPayment(values)).toEqual("101.25");
});

it("should return a result with 2 decimal places", function () {
  // ..
  const values = {
    amount: 10007,
    years: 10,
    rate: 4,
  };
  expect(calculateMonthlyPayment(values)).toEqual("101.32");
});

// /// etc
