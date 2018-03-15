import * as mongoose from 'mongoose';

export default function bootstrapDatabase() {
  const userAttached = process.env.MONGO_USER
    ? `${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@`
    : '';

  mongoose.connect(
    `mongodb://${userAttached}${process.env.MONGO_SERVER}/${
      process.env.MONGO_DB
    }`,
    err => {
      if (err) {
        console.error(
          'Could NOT connect to mongoDB. Check your environment variables for possible errors.'
        );
        process.exit();
      } else {
        console.log(`Connected successfully to db: ${process.env.MONGO_DB} `);
      }
    }
  );
}
