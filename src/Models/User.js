import { Model } from "@nozbe/watermelondb";
import { field, date, children } from "@nozbe/watermelondb/decorators";

export default class User extends Model {
  static table = "users";

  static associations = {
    tests: { type: "has_many", foreignKey: "user_id" }
  };

  @field("first_name") firstName;
  @field("last_name") lastName;
  @field("age") age;
  @field("number") number;
  @field("address") address;
  @field("occupation") occupation;
  @field("hearing_aid") hearingAid;

  @field("hearing_status") hearingStatus;
  @field("is_user") isUser;
  @field("is_binaural") isbinauarl;
  @field("hearing_aid_status") hearingAidStatus;
  @date("created_date_at") createdDateAt;

  @children("tests") tests;
}