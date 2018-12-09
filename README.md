## Spotify Clone

`Spotify Clone` is the frontend of the spotify with some functionalities, like, to play musics, to pass, next and previous, control of
volumes written with `React`

### Development

For code style the project uses `eslint`, configured in`.eslintrc`.

For dependency management it is recommended to use the `yarn`

```sh
yarn install # installs the dependencies
json-server server.json -p 3001 -w # fake api
yarn start # inicia o servidor webpack-dev
```

### Deploy

To generate the optimized files for production, simply run the build script and
the compiled result will go to folder `build/`

```sh
yarn build
```
