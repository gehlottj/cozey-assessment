## Run node App with below steps

`git clone {{repo_url}}`

`cd {{repo}}/backend`

`npm install`

`node .`

App will automatically run on port `3000`, can be changed in `backend/config/config.json` file.

Accessible at: http://localhost:3000/

### API Endpoints

```
GET http://localhost:3000/api/orders/getPickingList
GET http://localhost:3000/api/orders/getOrderList
```

## Run unit tests in node with below command

`npm test`






## Run React App with below steps

`git clone {{repo_url}}`

`cd {{repo}}/frontend`

`npm install`

`npm start`

App will automatically run on port `8000`, can be changed in `frontend/webpack.config.js` file.

Accessible at: http://localhost:3000/

