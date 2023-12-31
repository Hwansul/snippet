/* Avoid global test fixtures and seeds, add data per-test */

/**
 * ✅Do
 * Going by the golden rule(bullet 0), each test should add and act on its own set of DB rows to prevent coupling and easily reason about the test flow.
 * In reality, this is often violated by testers who seed the DB with data before running the tests(also known as ‘test fixture’) for the sake of performance improvement.
 * While performance is indeed a valid concern — it can be mitigated(see “Component testing” bullet), however, test complexity is a much painful sorrow that should govern other considerations most of the time.
 * Practically, make each test case explicitly add the DB records it needs and act only on those records.
 * If performance becomes a critical concern — a balanced compromise might come in the form of seeding the only suite of tests that are not mutating data(e.g.queries)
 */

/**
 * ❌ Otherwise
 * Few tests fail, a deployment is aborted, our team is going to spend precious time now, do we have a bug? 
 * let’s investigate, oh no — it seems that two tests were mutating the same seed data
 */

// ❌ Anti-Pattern Example: 
// Many tests are not independent and rely on some global hook to feed global DB data
before(async () => {
  //adding sites and admins data to our DB. Where is the data? outside. At some external json or migration framework
  await DB.AddSeedDataFromJson('seed.json');
});
it("When updating site name, get successful confirmation", async () => {
  //I know that site name "portal" exists - I saw it in the seed files
  const siteToUpdate = await SiteService.getSiteByName("Portal");
  const updateNameResult = await SiteService.changeName(siteToUpdate, "newName");
  expect(updateNameResult).to.be(true);
});
it("When querying by site name, get the right site", async () => {
  //I know that site name "portal" exists - I saw it in the seed files
  const siteToCheck = await SiteService.getSiteByName("Portal");
  expect(siteToCheck.name).to.be.equal("Portal"); //Failure! The previous test change the name :[
});

// ✅ Doing It Right Example: 
// We can stay within the test, each test acts on its own set of data
it("When updating site name, get successful confirmation", async () => {
  //test is adding a fresh new records and acting on the records only
  const siteUnderTest = await SiteService.addSite({
    name: "siteForUpdateTest"
  });
  const updateNameResult = await SiteService.changeName(siteUnderTest, "newName");
  expect(updateNameResult).to.be(true);
});
