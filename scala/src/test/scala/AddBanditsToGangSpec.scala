import org.scalatest.FeatureSpec
import org.scalatest.GivenWhenThen

class AddBanditsToGangSpec extends FeatureSpec with GivenWhenThen {

  feature("Add bandits to gang") {
    info("As a DungeonMaster")
    info("I want to add bandits to a gang")
    info("So that they can fight together")

    scenario("single bandit joins successfully") {
      Given("I am a DungeonMaster")
      And("there is a bandit named \"Common bandit\"")
      And("a gang named \"Forest bandits\"")
      When("I add the bandit to the gang")
      Then("\"Common bandit\" is included in the list of gang members")
      pending
    }
  }

}
