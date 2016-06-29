# VSO REST Cordova Example 
This project is a simple example of how to load a list of projects on a Visual Studio Team Services (VSTS) account, using the [VSTS REST API](https://www.visualstudio.com/en-us/integrate/api/overview). 

The most interesting code is in the scripts/vsoloader.js file.

The project was built using the default Blank Cordova app template in Visual Studio 2015, and tested as an Android application. You should be able to build this with any flavor of Visual Studio 2015, including the free [Community edition](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx).

More details about this example can be found in [this blog post](http://codesmells.net/2015/09/14/quick-start-on-making-an-apache-cordova-app-to-connect-to-visual-studio-online/).

## Getting Started

This app relies on you creating a [Personal Access Token (PAT)](http://roadtoalm.com/2015/07/22/using-personal-access-tokens-to-access-visual-studio-online/) to access Visual Studio Online through the app. It also relies on the [Visual Studio Tools for Apache Cordova](https://www.visualstudio.com/en-us/features/cordova-vs.aspx).

Once you have created the personal access token, start this app in Visual Studio. You will need to enter the user name that you login with, then use the personal access token instead of your own password, and then the account name. After that, click the Display Project list button and you should see the list of projects on the account load below.

For more detailed instructions, [click this blog post](http://codesmells.net/2015/09/14/quick-start-on-making-an-apache-cordova-app-to-connect-to-visual-studio-online/).



