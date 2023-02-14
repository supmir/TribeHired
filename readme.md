# TribeHired Technical Test

## The `/top` endpoint:

```bash
curl -X GET 'http://localhost:3000/top'
```

Returns:

```json
[
  {
    "post_id": 1,
    "post_title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "total_number_of_comments": 5
  },
  {
    "post_id": 2,
    "post_title": "qui est esse",
    "total_number_of_comments": 5
  }
  //   truncated for readability
]
```

## The `/search` endpoint:

```bash
curl -X GET 'http://localhost:3000/search?postId=1&id=1&name=quam&email=gard&body=ipsam'
```

- All query parameters are optional
- Filtering match search with multiple criteria
- Excludes comments that fails even one crietria

Returns:

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
