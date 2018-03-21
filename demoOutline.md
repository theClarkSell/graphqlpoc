# Demo Outline

## Demo Setup

* node -> Express -> Apollo -> GraphQL -> Mongoose -> Mongo
* TC -> Events -> Speakers -> Sessions

## Document Explorer

* Type system
  * automatic validation
* Documentation
  * detailed docs in sync with codebase
* Depreciated Fields
* Method with arguments
  * query -> speakers -> findSpeaker

> [graphiql - http://localhost:8000/graphiql ](http://localhost:8000/graphiql)

# Queries

## Basic Query

[basic query](http://localhost:8000/graphiql?query=query%20%7B%0A%20%20speakers%20%7B%0A%20%20%20%20firstName%0A%20%20%20%20lastName%0A%20%20%20%20id%0A%20%20%7D%0A%7D)

```
query {
  speakers {
    firstName
    lastName
    id
  }
}
```

Same query but shorthand syntax

[shorthand query](http://localhost:8000/graphiql?query=%0A%7B%20speakers%20%7B%0A%20%20%20%20firstName%0A%20%20%20%20lastName%0A%20%20%20%20id%0A%20%20%7D%0A%7D%0A)

```
{ speakers {
    firstName
    lastName
    id
  }
}
```

## Nested Query

[nested query](http://localhost:8000/graphiql?query=%7B%0A%20%20events%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20speakers%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20firstName%0A%20%20%20%20%20%20lastName%0A%20%20%20%20%20%20sessions%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=%7B%0A%20%20%22newEvent%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20%22Demo%20THIS%22%2C%0A%20%20%20%20%22description%22%3A%20%22Such%20Much%20411%20Awesome%22%2C%0A%20%20%20%20%22year%22%3A%20%222018%22%0A%20%20%7D%0A%7D)

```
{
  events {
    id
    name
    speakers {
      id
      firstName
      lastName
      sessions {
        id
        title
      }
    }
  }
}
```

## Named and Alias

Importance of your own payload

[simple alias](http://localhost:8000/graphiql?query=%7B%0A%20%20events%20%7B%0A%20%20%20%20UUID%3A%20id%0A%20%20%7D%0A%7D)

```
{
  events {
    UUID: id
  }
}
```

[simple named query](<http://localhost:8000/graphiql?query=%0Aquery%20find_by_id%20%7B%0A%20%20%20%20John%3A%20findSpeaker%20(userID%3A%20%2259c527a2c04963d7c82ebdae%22)%20%7B%0A%20%20%20%20%20%20%20%20uniqueId%3A%20id%0A%20%20%20%20%09lastName%0A%20%20%20%20%7D%0A%7D&operationName=find_by_id>)

```
query find_by_id {
    John: findSpeaker (userID: "59c527a2c04963d7c82ebdae") {
        uniqueId: id
    	lastName
    }
}
```

## Multiple Queries Together

## Fragments

[fragments](http://localhost:8000/graphiql?query=fragment%20lazyBoyJones%20on%20Session%7B%0A%20id%20%0A%7D%0A%0Aquery%20fragments%20%7B%0A%20%20sessions%20%7B%0A%20%20%20%20...lazyBoyJones%0A%20%20%7D%0A%7D%0A%0A&operationName=fragments&variables=%7B%0A%20%20%22newEvent%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20%22DemoMe%22%2C%0A%20%20%20%20%22description%22%3A%20%22Such%20Awesome%22%2C%0A%20%20%20%20%22year%22%3A%20%222017%22%0A%20%20%7D%0A%7D)

```
fragment lazyBoyJones on Session{
 id
}

query fragments {
  sessions {
    ...lazyBoyJones
  }
}
```

### Yelp Example:

[example](<https://www.yelp.com/developers/graphiql?query=%0Afragment%20basicBizInfo%20on%20Business%20%7B%0A%20%20name%0A%20%20id%0A%20%20rating%0A%20%20review_count%0A%20%20photos%0A%7D%0A%0A%7B%0A%20%20b1%3A%20business(id%3A%20%22yelp-san-francisco%22)%20%7B%0A%20%20%20%20...basicBizInfo%0A%20%20%7D%0A%20%20b2%3A%20business(id%3A%20%22garaje-san-francisco%22)%20%7B%0A%20%20%20%20...basicBizInfo%0A%20%20%7D%0A%7D%0A%0A%0A>)

```
fragment basicBizInfo on Business {
  name
  id
  rating
  review_count
  photos
}
```

```
{
  b1: business(id: "yelp-san-francisco") {
    ...basicBizInfo
  }
  b2: business(id: "garaje-san-francisco") {
    ...basicBizInfo
  }
}
```

## Query Variables

[query with vars](<http://localhost:8000/graphiql?query=query%20find%20(%24userId%3A%20String!)%20%7B%0A%20%20%20%20findSpeaker%20(userID%3A%20%24userId)%20%7B%0A%20%20%20%20%20%20%20%20uniqueId%3A%20id%0A%20%20%20%20%09lastName%0A%20%20%20%20%7D%0A%7D&operationName=find_by_idn&variables=%7B%0A%20%20%22userId%22%3A%20%2259c527a2c04963d7c82ebdae%22%0A%7D>)

```
query find ($userId: String!) {
    findSpeaker (userID: $userId) {
        uniqueId: id
    	lastName
    }
}
```

query variables

```
{
  "userId": "59c527a2c04963d7c82ebdae"
}
```

## Querying the type system

[query the type system itself](http://localhost:8000/graphiql?query=%0A%7B%20__schema%20%7B%0A%09types%20%7B%0A%09%09name%0A%20%20%20%20description%0A%20%20%7D%0A%7D%7D)

```
{ __schema {
	types {
		name
    description
  }
}}
```

## Voyager

Because of the endpoint describing itself we can do intersting things with it.

* [localhost - http://localhost:8000/voyager](http://localhost:8000/voyager)
* [GitHub - https://developer.github.com/v4/explorer/](https://developer.github.com/v4/explorer/)
* Yelp

# Mutations

[create new event with vars ](<http://localhost:8000/graphiql?query=mutation%20createNewEvent%20(%24newEvent%3A%20EventInput!)%7B%0A%20%20createEvent(newEvent%3A%20%24newEvent)%0A%7D&operationName=createNewEvent&variables=%7B%0A%20%20%22newEvent%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20%22Demo%20THIS%22%2C%0A%20%20%20%20%22description%22%3A%20%22Such%20Much%20411%20Awesome%22%2C%0A%20%20%20%20%22year%22%3A%20%222018%22%0A%20%20%7D%0A%7D>)

```
mutation createNewEvent ($newEvent: EventInput!){
  createEvent(newEvent: $newEvent)
}
```

query variables

```
{
  "newEvent": {
    "name": "Demo THIS",
    "description": "Such Much 411 Awesome",
    "year": "2018"
  }
}
```

# Code Deep Dive

1.  Overall Structure Breakdown
2.  Types Defined
3.  Queries and Mutations
4.  Resolvers
5.  Data Loaders

# Demo Support

## Localhost Routes

* Graphiql - http://localhost:8000/graphiql
* Voyager - http://localhost:8000/voyager
* REST Endpoint http://localhost:8000/api/helloWorld

## Public endpoints

* [github's graphiql https://developer.github.com/v4/explorer/](https://developer.github.com/v4/explorer/)

## Graphiql Shortcuts

* Run Query: CTRL-Enter (or press the play button above)
* Auto Complete: CTRL-Space (or just start typing)
