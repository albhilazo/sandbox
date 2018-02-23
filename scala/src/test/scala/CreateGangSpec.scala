import org.scalatest.FeatureSpec
import org.scalatest.GivenWhenThen

class CreateGangSpec extends FeatureSpec with GivenWhenThen {

  feature("Create gang") {
    info("As a DungeonMaster")
    info("I want to create a new gang")
    info("So that I can identify a gang of bandits")

    scenario("new gang created successfully") {
      Given("I am a DungeonMaster")
      When("I create a new gang named \"Forest bandits\"")
      Then("there is a gang named \"Forest bandits\" when listing all the gangs")
      pending
    }

    scenario("non-DungeonMaster can't create a gang") {
      Given("I am a Player")
      When("I create a new gang named \"Forest bandits\"")
      Then("I get an \"UnauthorizedAccess\" error")
      And("there is no gang named \"Forest bandits\" when listing all the gangs")
      pending
    }

    scenario("new gang already exists") {
      Given("I am a DungeonMaster")
      And("there is a created gang named \"Forest bandits\"")
      When("I create a new gang named \"Forest bandits\"")
      Then("I get a \"DuplicateGang\" error")
      And("there is only one gang named \"Forest bandits\" when listing all the gangs")
      pending
    }
  }

}
