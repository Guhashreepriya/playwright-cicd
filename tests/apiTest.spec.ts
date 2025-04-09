// const { test, expect } = require("@playwright/test");
// const payloadData = JSON.parse(JSON.stringify(require("../apiData.json")));
// // const data = JSON.parse(JSON.stringify(require("../Data.json")));
// test("should be able to get subset of booking details using query parameters", async ({
//   request,
// }) => {
//   const response = await request.post(`v2/pet`, {
//     headers: {
//       Accept: "application/json",
//       // 'Authorization': `${process.env.TOKEN}`,
//     },
//     data: {
//       payloadData,
//     },
//   });
//   console.log(await response.text());
//   console.log("Status is", await response.status());
//   expect(response.ok()).toBeTruthy();
//   expect(response.status()).toBe(200);
//   console.log("ID is ",response.body().id)
//   let id = response.body().id;


//   const responseGet = await request.post(`v2/pet/` + id, {});
//   console.log(await responseGet.json());
//   console.log("Status is", await responseGet.status());
// });
