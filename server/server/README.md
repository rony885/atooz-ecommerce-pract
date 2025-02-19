# GoCardless sample application

## Setup

The first thing to do is to clone the repository:

```sh

 git clone https://github.com/gocardless/sample-django-app.git
 cd sample-django-app

```

Create a virtual environment to install dependencies in and activate it:

```sh
### $ virtualenv2 --no-site-packages env
### $ source env/bin/activate
```

Then install the dependencies:

```sh
(env)$ pip install -r requirements.txt
```

Note the `(env)` in front of the prompt. This indicates that this terminal
session operates in a virtual environment set up by `virtualenv2`.

Once `pip` has finished downloading the dependencies:

```sh
(env)$ cd project
(env)$ python manage.py runserver
```

And navigate to `http://127.0.0.1:8000/gocardless/`.

In order to test the purchase flows, fill in the account details in
`project/gc_app/views.py` to match your **SANDBOX** developer credentials.

## Walkthrough

Before you interact with the application, go to GoCardless Sandbox and set up
the Redirect URI in the Developer settings. To make it work with this
application, use the value `http://127.0.0.1:8000/gocardless/confirm/`. This is to
make sure you are redirected back to your site where the purchase is verified
after you have made a purchase.

### One-off purchases

The simplest payment type is one-off. By clicking `Make purchase` on the sample
appliation website, you are taken through the flow in making a single payment.

A real-world example of one-off purchases is buying something in an online store.

### Subscriptions

Subscriptions are fixed periodic payments. Upon clicking `Subscribe` on the sample
application website, you are taken through the process of registering a subscription
with a merchant.

An example would be subscribing to a magazine or newspaper. The magazine is
published once a month and it costs £10, the payment flow sets up an automatic
transaction transferring £10 monthly to the merchant's account.

### Pre-authorizations

Pre-authorizations are essentially subscriptions, with an added twist that it's
up to the merchant to request funds from the customer's account, and the
customer may be billed up to a certain, authorized amount every billing
period. Upon clicking `Preauthorize` on the sample app website, you are taken
through the flow of pre-authorizing a variable direct-debit payment.

An example from the real world would be a type of pay-as-you go service where
the customer authorizes the merchant to claim up to a certain amount per interval
depending on usage.

In the sample app, you pre-authorize a payment of up to £100 every 3 months.

For further information, refer to the [docs](https://sandbox.gocardless.com/docs/connect_guide#payment-types).

## Webhooks

Set up `localtunnel` to test out Webhooks. The `localtunnel` package should be
installed as a dependency to the project.
