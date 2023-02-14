# TribeHired Technical Test

## The `/top` endpoint:

This endpoint returns the top posts with the highest number of comments. To access this endpoint, use the following command:

```bash
curl -X GET 'http://localhost:3000/top'
```

Returns:
The output is in JSON format and contains an array of posts, where each post has the following properties:

- post_id (number): the ID of the post
- post_title (string): the title of the post
- post_body (string): the content of the post
- total_number_of_comments (number): the total number of comments on the post

Example response:

```json
[
  {
    "post_id": 1,
    "post_title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "post_body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    "total_number_of_comments": 5
  },
  {
    "post_id": 2,
    "post_title": "qui est esse",
    "post_body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    "total_number_of_comments": 5
  }
  //   truncated for readability
]
```

## The `/search` endpoint:

This endpoint is used to search for comments that match specific criteria. All query parameters are optional and can be used to filter the search results based on different criteria. To access this endpoint, use the following command:

```bash
curl -X GET 'http://localhost:3000/search?postId=1&id=1&name=quam&email=gard&body=ipsam'
```

Returns: The output is in JSON format and contains an array of comments that match the search criteria. The search uses an exact match algorithm and filters comments that fail even one criteria. Each comment in the output has the following properties:

- postId (number): the ID of the post
- id (number): the ID of the comment
- name (string): the name of the comment author
- email (string): the email of the comment author
- body (string): the body of the comment

This search endpoint is useful for finding specific comments that match a set of criteria.

Example response:

```json
[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  }
]
```
