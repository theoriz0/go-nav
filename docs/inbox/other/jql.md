# Jira JQL 查询语言

来源：atlassian blog [article1](https://www.atlassian.com/blog/jira-software/jql-the-most-flexible-way-to-search-jira-14) [article2](https://www.atlassian.com/blog/2013/02/jql-the-most-flexible-way-to-search-jira-24)

## AND, OR, IS

```jql
project = Collaboration AND status = "In Progress"
project = Collaboration OR status = "In Progress"
description IS EMPTY
```

## Operators

### !=

```jql
status != "To Do"
```

When an issue has no labels, it does **not** pass the test "label is not", because there's nothing to compare.

```jql
labels is not "xxx" or labels is empty
```



### >=

```jql
"Story Points" >= 5
```

- `\>` | greater than
- `<` | smaller than
- `<=` | smaller than or equal

### IN, NOT IN

```jql
status IN ("To Do", "In Progress", "Closed")
```

## Functions

```jql
project = Pipeline AND assignee in membersof(‘test-engineering’)
project = Pipeline AND status in (resolved, closed) and fixversion = “Sprint A”
```

## History

```jql
project = Pipeline AND status CHANGED FROM “In Progress” TO “Resolved” BY jsmith
status CHANGED FROM “In Progress” TO “Open”
status was (“In Progress”) DURING (startofweek(), endofweek())
resolution changed to “Fixed” by currentUser() during (startOfYear(), endOfYear())
```

## Scoping and Sorting

what didn’t make last sprint and got moved into this sprint.

```jql
project = Pipeline AND status = open AND fixVersion = “Current Sprint”
AND fixVersion WAS “Last Sprint”
```

order by

```jql
project = Pipeline AND fixVersion = “Current Sprint” AND status = open ORDER BY priority, assignee
project = Pipeline AND priority in (blocker, critical) AND created > -2w ORDER BY created DESC
```

## Examples

What issues are unassigned and have not been updated in the last day?

```jql
assignee is EMPTY and created < -1d
```

