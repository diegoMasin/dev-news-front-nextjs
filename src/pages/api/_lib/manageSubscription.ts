import { query as q } from "faunadb";

import { fauna } from "../../../services/fauna";
import { stripe } from "../../../services/stripe";

export async function saveSubscription(
  subscriptionId: string,
  customerId: string
) {
  // Search user on Faunadb
  const userRef = await fauna.query(
    q.Select(
      "ref",
      q.Get(q.Match(q.Index("user_by_stripe_customer_id"), customerId))
    )
  );
  console.log("Passei aqui 2");

  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  // Save subscription's data on FaunaDb
  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
  };

  console.log("Passei aqui 3");
  await fauna.query(
    q.Create(q.Collection("subscriptions"), { data: subscriptionData })
  );
}
