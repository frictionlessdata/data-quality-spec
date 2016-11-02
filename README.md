# Data Quality Spec

[![Build Status](https://travis-ci.org/frictionlessdata/data-quality-spec.svg?branch=master)](https://travis-ci.org/frictionlessdata/data-quality-spec)

A simple spec that describes data quality errors common to tabular data files.

# Why?

There are many commonly recognised errors that can result from working with tabular data; these are often encountered in the open data world when working with CSV files.

Tools like [GoodTables](https://github.com/frictionlessdata/goodtables) seek to identify such errors and return helpful information to the user in order to fix her data files.

Such tools also go beyond checking for basic structural problems in tabular data files, and extend to detecting "schema" problems: essentially, issues with the consistency of the data itself.

The spec herein extracts the errors detected by GoodTables from the codebase, tidies them a little based on what we've learned, works towards making them available in a form for reuse outside of their original home.

# What

`spec.json` has `errors` object contains errors are keyed by error code (as strings), where each error has the following properties:

- **name** - The name of the error. Should be unique across the whole spec file.
- **type** - A broad category of error found when working with tabular data: source, structure and schema.
- **context** - An error location in the dataset. For example `head` (error in headers) or
`body` (error in contents).
- **weight** - A weighting on a scale of 1-100 of the severity of the error.
- **message** - The message that explains the error. Contains variables for replacement (via native string formatting markup in Python, and using `.replace` in JavaScript).
- **description** - A longer description of the error, designed to help non-technical users understand the error and take steps to resolve the error. Markdown is encouraged.

Take a look for yourself at [`spec.json`](./spec.json).
