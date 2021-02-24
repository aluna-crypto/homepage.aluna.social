import type { NextApiRequest, NextApiResponse } from "next";
import client from "@sendgrid/client";

let SENDGRID_API_KEY: string;
if (process.env.SENDGRID_API_KEY) {
  SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
} else {
  throw new Error("SENDGRID_API_KEY environment variable is not set");
}

client.setApiKey(SENDGRID_API_KEY);

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return;
  const { email } = req.body;
  let listId = "f6cded04-911d-4c3a-9092-55287dbff085";
  if (process.env.NODE_ENV == "production") {
    listId = "3a1fd984-f06b-4b44-abe6-b7d19b3dbf91";
  }
  const body = {
    list_ids: [listId],
    contacts: [
      {
        email,
      },
    ],
  };

  const request: any = {
    method: "PUT",
    url: "/v3/marketing/contacts",
    body,
  };
  client
    .request(request)
    .then(([, body]) => {
      console.log(body);
      res.status(200).json({ ok: true });
    })
    .catch((error) => {
      console.log("error on add user to Newsletter ", error);
      res.status(200).json({ ok: false });
    });
};
