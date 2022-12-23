<h2>My resume lives in the cloud 🌩</h2><br> This is what happens when you click on <a href='https://mvanhoutte.com'>mvanhoutte.cloud</a> <br><br><a href='https://www.netlify.com/'>Netlify</a> routes your request to the HTML, CSS and JS files which live inside a Github repository. These are cached by Github. That means there’s <strong>a copy of them across 200+ locations around the world.</strong> So no matter if you connect from Singapore or France, you’ll get the content as fast as possible.<br><br>Remember, <strong>the internet is a bunch of physically connected computers</strong> exchanging information at (close to) the speed of light. Being closer to the information you want, means faster loading times.<br><br><strong>Meanwhile on the client side</strong><br><br>When you connect to the <a href='https://mvanhoutte.com'>site</a> you trigger a <a href='https://docs.aws.amazon.com/lambda/latest/dg/welcome.html'>serverless function</a>. This means that instead of having a server running 24/7 waiting for a request, <strong>the function only exists on demand.</strong><br><br>This function queries my <a href='https://aws.amazon.com/dynamodb'>DynamoDB</a> database. It gets the visitor count, adds one and updates the table. The function returns the new value and displays it on the site.<br><br><img style='display:flex; margin:0 auto;' src='/images/visitors.jpg' alt='Resume visitors' /><br><strong>Continuous Deployment</strong><br><br>On Github, when I push changes to the main branch. <strong>They trigger an action that invalidates the cached files on Github.</strong> This means that the next time you connect, you’ll get the latest version of the files.<br><br><strong>But why?</strong><br><br>When creating a small application, it often takes a long time to get everything set up especially on the back-end. The stuff we did now makes it very easy to configure an API and host your website exactly the way you want to.<br><br><strong>References</strong><br><br> Thanks so much to <a href='https://forrestbrazeal.com/'>forrestbrazeal</a> for creating the <a href='https://forrestbrazeal.com/2020/04/23/the-cloud-resume-challenge/'>cloud resume challenge</a>. Going through it opened my mind to the world of cloud solutions. Now I use them for everything.<br><br><strong>Implementing security</strong><br><br>I set a concurrency limit on the lambda function. This means that even if somebody wants to troll me and spam the endpoint, it’s limited to 5 requests per minute.
