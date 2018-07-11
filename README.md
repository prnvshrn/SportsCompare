# SportsCompare
Web application for comparing two athletes

## Technologies Used
JavaScript, React, Node, GraphQL

## How To Compare
1. Select a sport from the header
2. Enter full names (First Name + Last Name) and hit 'Go'

## View in GraphQL
1. Append 'graphql' to the url
2. For baseball players use baseball as a root query and for football players use football.
3. The query is of the following format
```
{
  baseball(name:"David Ortiz"){
    position,
    AB,
    R,
  }
}
```
