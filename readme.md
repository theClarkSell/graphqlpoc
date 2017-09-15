

# Packages Used
* webserver: hapi
* graphql core: graphql
* graphql implementation: apollo
* logging: winston
* data layer: mongoose / mongodb

# Demo Execution
1. `npm install`
2. `.env` file will need the proper connection string for the database.
3. `npm start`

# Browsing
* Graphiql (Web Query IDE) - [http://localhost:8000/graphiql](http://localhost:8000/graphiql)
* Graphql Endpoint `/graphql` - [http://localhost:8000/graphql](http://localhost:8000/graphql)

# Interesting Queries

Simple Query

```
  query {
    sessions {
      id
      title
      description
    }
  }
```

Nested Query
```
  query {
    sessions {
      title
      description
      speakers {
        firstName
        lastName
      }
    }
  }
```

Query two types separately:
```
  query {
    events {
      name
      year
    }
    sessions {
      title
      id
    }
  }
```

# Interesting Mutations

Create a new Speaker passing in arguments
```
mutation ($newSpeaker: SpeakerInput!) {
  createSpeaker(newSpeaker: $newSpeaker) {
    id
  }
}
```
Passing Arguments

```
{
	"newSpeaker": {
    "firstName": "jimmy",
    "lastName": "johns",
    "email": "eatjjs@aol.com"
  }
}
```

# Directives

There are two built in directives `@skip` and `@include`

```
query ($skipMe: Boolean!) {
  sessions {
    title @skip (if: $skipMe)
  }
}
```
Where `$skipMe` is defined in the passed in arguments
```
{
  "skipMe": true
}
```

# Functional Areas Yet To Explore
* Schema Stitching
* Data loaders
* Data Connection. Not sure if it should be where it's placed right now.
* Filtering
* Paging
* Logging
* Splitting Types and Mutations then composing them
* TypeScript Conversion
* Proper async\await usage across the sample
* Granularity of Schema
* Extended Validation

# Use Cases
* user can't create a session without a speaker reference.
 * should be enforced in the input type
