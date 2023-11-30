import { connect } from 'mongoose';

// Connect to MongoDB
async function main () {
  await connect('mongodb://127.0.0.1:27017/bankcards');
}

main()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });
