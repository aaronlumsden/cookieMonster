# CookieMonster

A Javascript plugin that makes working with cookies as simple as childs play.

### Includes:

  - **set(*name,value,expiryDays*);** - Sets a cookie
  - **get(*name*);** - Gets a cookie
  - **update(*name,value,expiryDays*);** - Updates a cookie
  - **delete(*name*);** - Deletes a cookie
  - **exists(*name*);** - Checks if a cookie exists
  - **getAll();** - Gets all available cookies
  - **count();** - Counts the number of cookies
  
## Getting Started

### Include the Relevant Files

```sh
<script type="text/javascript" src="cookieMonster.js"></script>

```

### Instantiate the plugin

```sh
$cookies = new CookieMonster();
$cookies.set('Cookie 1', 'Cookie 1 Value', 30);
$cookies.update('Cookie 1', 'Cookie 1 Value Updated', 30);
$cookies.getAll();
$cookies.count();
$cookies.exists('Cookie 1');
$cookies.delete('Cookie 1');

```
