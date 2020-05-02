import { appSchema, tableSchema } from "@nozbe/watermelondb";

export const mySchema = appSchema({
  version: 2,
  tables: [
    tableSchema({
      name: "users",
      columns: [
        { name: "first_name", type: "string" },
        { name: "last_name", type: "string" },
        { name: "age", type: "number" },
        { name: "number", type: "string" },
        { name: "address", type: "string" },
        { name: "occupation", type: "string" },
        { name: "hearing_status", type: "string" },
        { name: "hearing_aid", type: "string" },
        { name: "hearing_aid_status", type: "string" },
        { name: "is_user", type: "boolean", isIndexed: true },
        { name: "is_binaural", type: "boolean", isIndexed: true },
        { name: "created_date_at", type: "number" , isIndexed: true}
      ]
    }),
    tableSchema({
      name: "tests",
      columns: [
        { name: "average", type: "string" },
        { name: "color", type: "string" },
        { name: "interval", type: "number" },
        { name: "post_click_interval", type: "number" },
        { name: "statements_number", type: "number" },
        { name: "number_of_wrong_statements", type: "number" },
        { name: "created_at", type: "number" },
        { name: "user_id", type: "string", isIndexed: true }
      ]
    })
  ]
});