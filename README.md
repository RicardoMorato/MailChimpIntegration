<h1 align="center"> Mailchimp Integration</h1>

<p align="center">
  <img width="50%" src="https://rockcontent.com/wp-content/uploads/2017/10/mailchimp-1-1280x720.png"/>
</p>

<h3 align="center">Why did I create this?</h3>

The main purpose of this repository is to help other developers in the epic quest to make the integration between their code and the Mailchimp API (more specifically the API 3.0). There are three important topics to be learned here:
  - The `NodeJs server <-> Front-end` integration;
  - The use of the `SuperAgent` library;
  - The integration with the Mailchimp API via the `Mailchimp API Key`;
  
  <h3 align="center">How to run this code</h3>
  
  
  
  It isn't hard to run this code, all you need to follow simple steps that will be showed now:
  - Run `npm i` to install all the dependencies;
  - Go to your Mailchimp account and get your `API key`, if you don't have one, you can easily generate clicking on the button 'generate API key';
  - In the code, where you see this below, replace with your informations:
    - ```const mailchimpInstance   = 'us4',
      listUniqueId        = 'afdd076d72',
      mailchimpApiKey     = 'b5245e6c5a83c55ca5667528b420c8dc-us4';
  - Then, you run the code, teste, understand it and be happy :D.
