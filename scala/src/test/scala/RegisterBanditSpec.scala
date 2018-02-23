import org.scalatest.FeatureSpec
import org.scalatest.GivenWhenThen

class RegisterBanditSpec extends FeatureSpec with GivenWhenThen {

  feature("Register bandit") {
    info("As a DungeonMaster")
    info("I want to register a new bandit")
    info("So that it can eventually face the heroes")

    scenario("new bandit is registered successfully") {
      Given("I am a DungeonMaster")
      When("I register a new bandit named \"Common bandit\"")
      Then("there is a bandit named \"Common bandit\" when listing all the bandits")
      pending
    }

    scenario("non-DungeonMaster can't register a bandit") {
      Given("I am a Player")
      When("I register a new bandit named \"Common bandit\"")
      Then("I get an \"UnauthorizedAccess\" error")
      And("there is no bandit named \"Common bandit\" when listing all the bandits")
      pending
    }

    scenario("new bandit already exists") {
      Given("I am a DungeonMaster")
      And("there is a registered bandit named \"Common bandit\"")
      When("I register a new bandit named \"Common bandit\"")
      Then("I get a \"DuplicateBandit\" error")
      And("there is only one bandit named \"Common bandits\" when listing all the bandits")
      pending
    }
  }

}
