-- Drop the existing tables if they exist
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS conversations;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS subscription_plans;

-- Create the subscription_plans table
CREATE TABLE IF NOT EXISTS subscription_plans (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  price numeric NOT NULL,
  description text NOT NULL
);

-- Add some sample data for the subscription plans
INSERT INTO subscription_plans (name, price, description)
VALUES ('Basic', 10.00, 'Access to basic features'),
       ('Pro', 20.00, 'Access to advanced features'),
       ('Premium', 30.00, 'Access to all features');

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  email text UNIQUE NOT NULL,
  password text NOT NULL,
  subscription_status text NOT NULL DEFAULT 'inactive',
  subscription_end_date timestamp,
  subscription_id uuid REFERENCES subscription_plans(id)
);

-- Create the conversations table
CREATE TABLE IF NOT EXISTS conversations (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL REFERENCES users(id),
  last_updated timestamp NOT NULL DEFAULT NOW()
);

-- Create the messages table
CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  conversation_id uuid NOT NULL REFERENCES conversations(id),
  sender_id uuid NOT NULL REFERENCES users(id),
  message_text text NOT NULL,
  timestamp timestamp NOT NULL DEFAULT NOW()
);
