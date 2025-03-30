# Task
The task is to make the UI built with the CSS challenge dynamic and interactive. General notes:
- Application can be built with any tools/libraries (if needed)
- Application should use an API architecture, where dummy data can be returned from the APIs directly within
the code, no real server-side code is required
- The data can be stored in localStorage or state management systems
- At the start up of the application, some cards should be already available
  
**Interactions**:

- **Add new card**
  - Open a modal where the user can add the card name and submit it. The expiration date and
    card number will be randomly generated by the system.
  - The card will be appended in the carousel together with the other cards

- **Freeze/Unfreeze card**
  - On click of the freeze card, the card will get the frozen status
  - The frozen card will look different from the others (up to the candidate for the look of it can
    be a simple semi-transparent opacity value applied)
  - The freeze button will toggle to “unfreeze” for the frozen card


# Running the App

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

#Install Node[>22.0] from official website for your development device.

## Step 1: Start Metro
On your terminal go to a folder where you would like to test this project. Execute the following command to initialize a blank repo.

## Step 2: Cloning the repo
Then clone this repository in your initialized repo.
```sh
git init
git clone https://github.com/vishalsinghsaini/AspireHomeAssignment.git
```
Now run the following commands to set up Node Modules required for the project.

## Step 2: Installing the packages
```sh
npm install / yarn install / yarn
```

## Step 3: Install pod dependencies
```sh
yarn pod / cd ios && pod install

```
Now, to test on emulator make sure your environment variables are set up as per recommendations here for -- iOS(https://docs.expo.dev/workflow/ios-simulator/) -- Android(https://docs.expo.dev/workflow/android-studio-emulator/)
To test on physical devices, follow the guide as shared here
You can generate Android Project folder and iOS xcodeproject by following the instructions here for iOS and here for Android

## Step 4: Start the app on android by running below command
```sh
yarn android
```

## Step 5: Start the app on IOS by running below command
```sh
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.


# Screen Recording of IOS and android showing below mentioned points
1. On initial load show card with already available data by calling a MOCK fetchCard api
2. Freeze/unfreeze state of card by toggling the button.
3. Hide the details of the card
4. open a modal on clicking add to card button. With proper baisc error validation on name and generate expiry , cvv , cardnumber randomaly and finally call the createCard api to append the new card details on top of the first one

**Android**



https://github.com/user-attachments/assets/777fc89c-2177-420a-8fc7-fea2d5ab4823



**IOS**


https://github.com/user-attachments/assets/03ad9f28-b41c-48e5-ace0-3451c0de3547


# Architecture
```sh
src
├── app-hooks 
│   └── use-app-theme.tsx  
├── assets  
│   ├── constants
│   │   └── index.ts
│   └── images
├── components
│   ├── card
│   └── popUpModal.tsx
├── config
│   ├── app-navigation
│   │   ├── constant.tsx
│   │   └── index.tsx
│   ├── env
│   │   ├── env.json
│   │   ├── env.prod.json
│   │   └── index.tsx
│   └── network
│       ├── api
│       │   ├── hooks
│       │   └── services
│       ├── api-constants.tsx
│       └── index.tsx
├── reducers
│   ├── active-env-reducer.tsx
│   ├── home-reducer.tsx
│   ├── root-reducer.tsx
│   └── store.ts
├── screens
│   └── home
│       ├── index.tsx
│       └── style.ts
|       └── home.test.tsx
├── stacks
│   ├── bottom-tabs
│   └── home-stack
├── theme
│   ├── device
│   │   ├── device.js
│   │   └── normalize.tsx
│   ├── colors.ts
│   ├── fonts.ts
│   ├── index.ts
│   └── theme.d.ts
└── utils
```
# APIs Used 
(Notes for the evaluator)

- APIs are at a free host (https://designer.mocky.io/manage), the operations shoudn't take much time. Kindly check console for logs of API call and response 
- The APIs are dumb APIs i.e. there is no storage at backend and all the data will be static and are stored in local state managemen using redux. 
- There is a exhaust limit to around 300 request weekly.
- All the tabs in tab bar are perfectly functional couldn't have been better we both active and inactive iamges were there to be extracted from illustrator.
- Some data have been hardcoded as disabled to keep the operation of the App limited to just the shared scope.

# Minimum SDk IOS and Android supported version 
- current for android it's 24 in build.gradle file. We can update it accordingly
- similarly for IOS. It's define using min_ios_version_supported in podfile we can update according;ly for e.g. 12.0
