# Migration `20200420174126-init`

This migration has been generated by Curtis Bollinger at 4/20/2020, 5:41:26 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "quaint"."Person" (
    "createdAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT '' ,
    "updatedAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00' 
) 

CREATE UNIQUE INDEX "quaint"."Person.name" ON "Person"("name")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200420174126-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,16 @@
+datasource db {
+  provider = "sqlite"
+  url      = "file:./data.db"
+  default  = true
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Person {
+  id        Int      @default(autoincrement()) @id
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+  name      String   @unique
+}
```


