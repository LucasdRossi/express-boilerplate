import { createUserUseCase } from ".";

const name = "Wilhelmine Lowe V";

describe("create user use case", () => {
  it("should create a user", async () => {
    await createUserUseCase.execute({ name });
  });

  it("should not create a user", async () => {
    try {
      await createUserUseCase.execute({ name });
    } catch (error) {
      expect(error.message).toBe("User already exist");
    }
  });
});
