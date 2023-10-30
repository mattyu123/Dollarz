# Backend API overview

Backend itself runs on port 8000
to which the Frontend makes requests to.

The backend communicates directly with mongodb
in the containerized virtual network.

TODO:
- GraphQL api for charts
- OAuth between the frontend and backend

## Libraries of the Backend:

**API etc**
FastApi

- https://fastapi.tiangolo.com/
- https://fastapi.tiangolo.com/how-to/nosql-databases-couchbase/
- https://fastapi.tiangolo.com/deployment/docker/
- https://fastapi.tiangolo.com/advanced/security/oauth2-scopes/?h=oauth
- https://fastapi.tiangolo.com/tutorial/background-tasks/?h=background

strawberry(fastapi integration version) for Graphql

- https://strawberry.rocks/docs/integrations/fastapi

- https://fastapi.tiangolo.com/how-to/graphql/

**datascience + finance**

- numpy https://numpy.org/
- pandas https://pandas.pydata.org/
- scipy https://docs.scipy.org/doc/scipy/tutorial/index.html#user-guide


(motor)
(pydantic)



**Services**

(excluding FastApi)
- Uvicorn https://www.uvicorn.org/
- Mogodb
