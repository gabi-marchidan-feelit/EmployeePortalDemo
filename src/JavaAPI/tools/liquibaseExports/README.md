# Liquibase Schema Exports

1. Install liquibase. I installed with brew: `brew install liquibase`
1. Run a command similar to the following:

```$bash
liquibase --driver=oracle.jdbc.OracleDriver \
      --classpath=./tools/libs/ojdbc7.jar \
      --changeLogFile=./db.changelog-apps.yml \
      --url="jdbc:oracle:thin:@//sdev.rgis.com:1533/SDEV" \
      --username=TWHITNEY \
      --password=XXXX \
      --defaultSchemaName=APPS \
      generateChangeLog
```

3. Pull out definitions you need for the export and add to `src/main/resources/db/changelog`
