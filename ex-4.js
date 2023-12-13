// Exercise #4
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding here
async function fetchJohnProfile() {
  try {
    const profile = await getJohnProfile();
    console.log(profile);
  } catch (error) {
    console.error(error);
  }
}
fetchJohnProfile();