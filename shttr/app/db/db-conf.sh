if [ $SERVER_TYPE = "DEVELOPMENT" ]; then
  DB_DRIVER="sqlite3"
  DB_NAME="development.db"
  DB_LOCATION="/var/shttrdb"
elif [ $SERVER_TYPE = "PRODUCTION" ]; then
  DB_DRIVER="postgres"
  DB_NAME=
  DB_LOCATION=
fi
