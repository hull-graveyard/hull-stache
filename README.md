# About this project

This project is built on the [Hull](http://hull.io) platform, to emonstrate the use of Webhooks in Hull.

**You will need an account on Hull to run the hooks locally, or to write your own.**

-----------------------
# Hullstache

This is demo a entirely built with Hull.
The purpose is to send you a _mustachified_ version of your Facebook profile by email.

[Play with Hullstache (http://hull.github.com/hullstache)](http://hull.github.com/hullstache)

The following features are demoed in this app.

* Login with Facebook
* Retrieval of profile picture and email address from Facebook data
* Your own scripts run as a (server-side) webhook

The webhook has been writen in PHP. Although we reconmmend PHP 5.4, any version starting at PHP 5.1 should work.

## How to add a webhook to your app

1. Write your script/app that can respond to POST requests
2. Login to the [Hull's admin](http://alpha.hullapp.io/)
3. Select your app in the organization it belongs to
4. Click on the "Create a hook" button
5. Enter the URL of your hook
6. Et voila!
