# Kafka Single Producer Example
This is an example of a single producer using Apache Kafka. This example will show you how to set up and run a basic single producer using Kafka.

## Prerequisites
In order to run this example, you will need to have the following installed:
- Kafka
- Node.js

## Setup
Once you have the prerequisites installed, you will need to do the following steps to set up the Kafka single producer example:

1. Create a topic in Kafka.
2. Create a producer.js file in the root of your project.
3. Run the producer.js file.

## Producer.js
The producer.js file contains the code for the single producer. It will create a producer object and send messages to the topic you created in step 1. Here is the code for the producer.js file:

```javascript
// Creating a Kafka producer
const { Kafka } = require("kafka-node");

// Connecting to Kafka server
const kafka = new Kafka({
  // Replace with your Kafka server address
  kafkaHost: "localhost:9092",
});

// Creating a producer
const producer = new kafka.Producer(client);

// Sending a message to a topic
const message = {
  topic: "test",
  messages: "Hello world!",
};

producer.send([message], (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
```

## Running the Producer
Once you have the producer.js file set up, you can run the producer using the following command:

```node producer.js```

This will send the message "Hello world!" to the topic you created in step 1. You can check the output of the producer in the terminal.
