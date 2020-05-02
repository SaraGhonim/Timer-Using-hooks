import { Model } from "@nozbe/watermelondb";
import { field, relation } from "@nozbe/watermelondb/decorators";

export default class Test extends Model {
  static table = "tests";

  static associations = {
    user: { type: "belongs_to", key: "user_id" }
  };

  @field("post_click_interval") postClickInterval;
  @field("number_of_wrong_statements") numberOfWrongStatements;
  @field("statements_number") statementsNumber;
  @field("average") average;
  @field("color") color;
  @field("interval") interval;

  @date("created_at") createdAt;
  @relation("users", "user_id") user;
}