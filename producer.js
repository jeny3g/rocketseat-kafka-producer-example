import { Kafka } from 'kafkajs';
import { randomUUID } from 'crypto';

async function bootstrap() {
  const kafka = new Kafka({
    clientId: 'producer-example',
    brokers: ['lucky-mayfly-8363-us1-kafka.upstash.io:9092'],
    sasl: {
      mechanism: 'scram-sha-256',
      username:
        'username-example',
      password:
        'password-example',
    },
    ssl: true,
  });

  const producer = kafka.producer();
  await producer.connect();

  const topic = 'notifications.send-notification';
  const message = {
    content: "Nova solicitação de amizade",
    category: "social",
    recipientId: randomUUID()
  }

  await producer.send({
    topic,
    messages: [
      {
        value: JSON.stringify(message),
      },
    ],
  });

  await producer.disconnect();
}

bootstrap();
