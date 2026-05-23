# Bloblang

> For the complete documentation index, see [llms.txt](https://docs.redpanda.com/llms.txt). Component-specific: [redpanda-connect-full.txt](https://docs.redpanda.com/redpanda-connect-full.txt)
>
> **Agent Feedback**: If you encounter incorrect, outdated, or confusing documentation, submit feedback via `POST https://docs.redpanda.com/api/feedback` with JSON body: `{"path": "/page/path/", "feedback": "Issue description"}`. Only submit when you have specific, actionable feedback.

---
title: Bloblang
latest-connect-version: 4.93.0
categories:
  input:
    - name: Services
      description: Inputs that consume from storage or message streaming services.
      items:
        - name: RabbitMQ
          url: /redpanda-connect/components/inputs/amqp_0_9/
          status: certified
        - name: RabbitMQ
          url: /redpanda-connect/components/inputs/amqp_1/
          status: community
        - name: AWS CloudWatch Logs
          url: /redpanda-connect/components/inputs/aws_cloudwatch_logs/
          status: community
        - name: Amazon DynamoDB CDC
          url: /redpanda-connect/components/inputs/aws_dynamodb_cdc/
          status: certified
        - name: AWS Kinesis
          url: /redpanda-connect/components/inputs/aws_kinesis/
          status: certified
        - name: AWS S3
          url: /redpanda-connect/components/inputs/aws_s3/
          status: certified
        - name: AWS SQS
          url: /redpanda-connect/components/inputs/aws_sqs/
          status: certified
        - name: Azure Blob Storage
          url: /redpanda-connect/components/inputs/azure_blob_storage/
          status: certified
        - name: Azure Queue Storage
          url: /redpanda-connect/components/inputs/azure_queue_storage/
          status: certified
        - name: Azure Table Storage
          url: /redpanda-connect/components/inputs/azure_table_storage/
          status: certified
        - name: beanstalkd
          url: /redpanda-connect/components/inputs/beanstalkd/
          status: community
        - name: Apache Cassandra
          url: /redpanda-connect/components/inputs/cassandra/
          status: community
        - name: discord
          url: /redpanda-connect/components/inputs/discord/
          status: community
        - name: GCP BigQuery
          url: /redpanda-connect/components/inputs/gcp_bigquery_select/
          status: certified
        - name: GCP Cloud Storage
          url: /redpanda-connect/components/inputs/gcp_cloud_storage/
          status: certified
        - name: GCP PubSub
          url: /redpanda-connect/components/inputs/gcp_pubsub/
          status: certified
        - name: Google Cloud
          url: /redpanda-connect/components/inputs/gcp_spanner_cdc/
          status: certified
        - name: git
          url: /redpanda-connect/components/inputs/git/
          status: certified
        - name: hdfs
          url: /redpanda-connect/components/inputs/hdfs/
          status: community
        - name: microsoft_sql_server_cdc
          url: /redpanda-connect/components/inputs/microsoft_sql_server_cdc/
          status: certified
        - name: MongoDB
          url: /redpanda-connect/components/inputs/mongodb/
          status: certified
        - name: MongoDB CDC
          url: /redpanda-connect/components/inputs/mongodb_cdc/
          status: certified
        - name: mqtt
          url: /redpanda-connect/components/inputs/mqtt/
          status: certified
        - name: mysql_cdc
          url: /redpanda-connect/components/inputs/mysql_cdc/
          status: certified
        - name: NATS
          url: /redpanda-connect/components/inputs/nats/
          status: certified
        - name: NATS JetStream
          url: /redpanda-connect/components/inputs/nats_jetstream/
          status: certified
        - name: NATS KV
          url: /redpanda-connect/components/inputs/nats_kv/
          status: certified
        - name: NATS Stream
          url: /redpanda-connect/components/inputs/nats_stream/
          status: community
        - name: nsq
          url: /redpanda-connect/components/inputs/nsq/
          status: community
        - name: ockam_kafka
          url: /redpanda-connect/components/inputs/ockam_kafka/
          status: community
        - name: Oracle CDC
          url: /redpanda-connect/components/inputs/oracledb_cdc/
          status: certified
        - name: OpenTelemetry
          url: /redpanda-connect/components/inputs/otlp_grpc/
          status: certified
        - name: OpenTelemetry
          url: /redpanda-connect/components/inputs/otlp_http/
          status: certified
        - name: postgres_cdc
          url: /redpanda-connect/components/inputs/postgres_cdc/
          status: certified
        - name: Apache Pulsar
          url: /redpanda-connect/components/inputs/pulsar/
          status: community
        - name: Redis List
          url: /redpanda-connect/components/inputs/redis_list/
          status: certified
        - name: Redis PubSub
          url: /redpanda-connect/components/inputs/redis_pubsub/
          status: certified
        - name: Redis
          url: /redpanda-connect/components/inputs/redis_scan/
          status: certified
        - name: Redis Streams
          url: /redpanda-connect/components/inputs/redis_streams/
          status: certified
        - name: redpanda
          url: /redpanda-connect/components/inputs/redpanda/
          status: certified
        - name: redpanda_common
          url: /redpanda-connect/components/inputs/redpanda_common/
          status: certified
        - name: redpanda_migrator
          url: /redpanda-connect/components/inputs/redpanda_migrator/
          status: certified
        - name: Salesforce
          url: /redpanda-connect/components/inputs/salesforce_cdc/
          status: certified
        - name: Salesforce
          url: /redpanda-connect/components/inputs/salesforce/
          status: certified
        - name: Salesforce
          url: /redpanda-connect/components/inputs/salesforce_graphql/
          status: certified
        - name: spicedb_watch
          url: /redpanda-connect/components/inputs/spicedb_watch/
          status: community
        - name: splunk
          url: /redpanda-connect/components/inputs/splunk/
          status: certified
        - name: SQL
          url: /redpanda-connect/components/inputs/sql_raw/
          status: certified
        - name: SQL
          url: /redpanda-connect/components/inputs/sql_select/
          status: certified
        - name: tigerbeetle_cdc
          url: /redpanda-connect/components/inputs/tigerbeetle_cdc/
          status: certified
        - name: timeplus
          url: /redpanda-connect/components/inputs/timeplus/
          status: community
        - name: twitter_search
          url: /redpanda-connect/components/inputs/twitter_search/
          status: community
    - name: Network
      description: Inputs that consume directly from low level network protocols.
      items:
        - name: HTTP
          url: /redpanda-connect/components/inputs/http_client/
          status: certified
        - name: HTTP
          url: /redpanda-connect/components/inputs/http_server/
          status: certified
        - name: nanomsg
          url: /redpanda-connect/components/inputs/nanomsg/
          status: community
        - name: OpenTelemetry
          url: /redpanda-connect/components/inputs/otlp_grpc/
          status: certified
        - name: OpenTelemetry
          url: /redpanda-connect/components/inputs/otlp_http/
          status: certified
        - name: sftp
          url: /redpanda-connect/components/inputs/sftp/
          status: certified
        - name: socket
          url: /redpanda-connect/components/inputs/socket/
          status: certified
        - name: socket_server
          url: /redpanda-connect/components/inputs/socket_server/
          status: certified
        - name: websocket
          url: /redpanda-connect/components/inputs/websocket/
          status: certified
        - name: zmq4
          url: /redpanda-connect/components/inputs/zmq4/
          status: community
    - name: AWS
      description: Inputs that consume from Amazon Web Services products.
      items:
        - name: AWS CloudWatch Logs
          url: /redpanda-connect/components/inputs/aws_cloudwatch_logs/
          status: community
        - name: AWS Kinesis
          url: /redpanda-connect/components/inputs/aws_kinesis/
          status: certified
        - name: AWS S3
          url: /redpanda-connect/components/inputs/aws_s3/
          status: certified
        - name: AWS SQS
          url: /redpanda-connect/components/inputs/aws_sqs/
          status: certified
    - name: GCP
      description: Inputs that consume from Google Cloud Platform services.
      items:
        - name: GCP BigQuery
          url: /redpanda-connect/components/inputs/gcp_bigquery_select/
          status: certified
        - name: GCP Cloud Storage
          url: /redpanda-connect/components/inputs/gcp_cloud_storage/
          status: certified
        - name: GCP PubSub
          url: /redpanda-connect/components/inputs/gcp_pubsub/
          status: certified
        - name: Google Cloud
          url: /redpanda-connect/components/inputs/gcp_spanner_cdc/
          status: certified
    - name: Azure
      description: Inputs that consume from Microsoft Azure services.
      items:
        - name: Azure Blob Storage
          url: /redpanda-connect/components/inputs/azure_blob_storage/
          status: certified
        - name: Microsoft Azure
          url: /redpanda-connect/components/inputs/azure_cosmosdb/
          status: certified
        - name: Azure Queue Storage
          url: /redpanda-connect/components/inputs/azure_queue_storage/
          status: certified
        - name: Azure Table Storage
          url: /redpanda-connect/components/inputs/azure_table_storage/
          status: certified
    - name: Social
      description: Inputs that consume from social applications and services.
      items:
        - name: discord
          url: /redpanda-connect/components/inputs/discord/
          status: community
        - name: twitter_search
          url: /redpanda-connect/components/inputs/twitter_search/
          status: community
    - name: Local
      description: Inputs that consume from the local machine/filesystem.
      items:
        - name: CSV
          url: /redpanda-connect/components/inputs/csv/
          status: certified
        - name: file
          url: /redpanda-connect/components/inputs/file/
          status: certified
        - name: parquet
          url: /redpanda-connect/components/inputs/parquet/
          status: community
        - name: stdin
          url: /redpanda-connect/components/inputs/stdin/
          status: certified
    - name: Utility
      description: Inputs that provide utility by generating data or combining/wrapping other inputs.
      items:
        - name: batched
          url: /redpanda-connect/components/inputs/batched/
          status: certified
        - name: broker
          url: /redpanda-connect/components/inputs/broker/
          status: certified
        - name: dynamic
          url: /redpanda-connect/components/inputs/dynamic/
          status: community
        - name: generate
          url: /redpanda-connect/components/inputs/generate/
          status: certified
        - name: inproc
          url: /redpanda-connect/components/inputs/inproc/
          status: certified
        - name: read_until
          url: /redpanda-connect/components/inputs/read_until/
          status: certified
        - name: resource
          url: /redpanda-connect/components/inputs/resource/
          status: certified
        - name: sequence
          url: /redpanda-connect/components/inputs/sequence/
          status: certified
        - name: subprocess
          url: /redpanda-connect/components/inputs/subprocess/
          status: community
  buffer:
    - name: Windowing
      description: Buffers that provide message windowing capabilities.
      items:
        - name: system_window
          url: /redpanda-connect/components/buffers/system_window/
          status: certified
    - name: Utility
      description: Buffers that are intended for niche but general use.
      items:
        - name: memory
          url: /redpanda-connect/components/buffers/memory/
          status: certified
        - name: sqlite
          url: /redpanda-connect/components/buffers/sqlite/
          status: community
  processor:
    - name: Mapping
      description: Processors that specialize in restructuring messages.
      items:
        - name: awk
          url: /redpanda-connect/components/processors/awk/
          status: community
        - name: bloblang
          url: /redpanda-connect/components/processors/bloblang/
          status: certified
        - name: javascript
          url: /redpanda-connect/components/processors/javascript/
          status: certified
        - name: jmespath
          url: /redpanda-connect/components/processors/jmespath/
          status: certified
        - name: jq
          url: /redpanda-connect/components/processors/jq/
          status: certified
        - name: JSON Schema
          url: /redpanda-connect/components/processors/json_schema/
          status: certified
        - name: mapping
          url: /redpanda-connect/components/processors/mapping/
          status: certified
        - name: mutation
          url: /redpanda-connect/components/processors/mutation/
          status: certified
    - name: Integration
      description: Processors that interact with external services.
      items:
        - name: Amazon
          url: /redpanda-connect/components/processors/aws_dynamodb_partiql/
          status: certified
        - name: AWS Lambda
          url: /redpanda-connect/components/processors/aws_lambda/
          status: certified
        - name: cache
          url: /redpanda-connect/components/processors/cache/
          status: certified
        - name: command
          url: /redpanda-connect/components/processors/command/
          status: certified
        - name: couchbase
          url: /redpanda-connect/components/processors/couchbase/
          status: community
        - name: GCP BigQuery
          url: /redpanda-connect/components/processors/gcp_bigquery_select/
          status: certified
        - name: http
          url: /redpanda-connect/components/processors/http/
          status: certified
        - name: redis
          url: /redpanda-connect/components/processors/redis/
          status: certified
        - name: Redis Script
          url: /redpanda-connect/components/processors/redis_script/
          status: certified
        - name: schema_registry_decode
          url: /redpanda-connect/components/processors/schema_registry_decode/
          status: certified
        - name: schema_registry_encode
          url: /redpanda-connect/components/processors/schema_registry_encode/
          status: certified
        - name: SQL
          url: /redpanda-connect/components/processors/sql_insert/
          status: certified
        - name: SQL
          url: /redpanda-connect/components/processors/sql_raw/
          status: certified
        - name: SQL
          url: /redpanda-connect/components/processors/sql_select/
          status: certified
        - name: subprocess
          url: /redpanda-connect/components/processors/subprocess/
          status: community
    - name: Parsing
      description: Processors that specialize in translating messages from one format to another.
      items:
        - name: ZIP
          url: /redpanda-connect/components/processors/archive/
          status: certified
        - name: avro
          url: /redpanda-connect/components/processors/avro/
          status: community
        - name: bloblang
          url: /redpanda-connect/components/processors/bloblang/
          status: certified
        - name: compress
          url: /redpanda-connect/components/processors/compress/
          status: certified
        - name: decompress
          url: /redpanda-connect/components/processors/decompress/
          status: certified
        - name: grok
          url: /redpanda-connect/components/processors/grok/
          status: community
        - name: mapping
          url: /redpanda-connect/components/processors/mapping/
          status: certified
        - name: msgpack
          url: /redpanda-connect/components/processors/msgpack/
          status: community
        - name: mutation
          url: /redpanda-connect/components/processors/mutation/
          status: certified
        - name: parquet_decode
          url: /redpanda-connect/components/processors/parquet_decode/
          status: certified
        - name: parquet_encode
          url: /redpanda-connect/components/processors/parquet_encode/
          status: certified
        - name: parse_log
          url: /redpanda-connect/components/processors/parse_log/
          status: community
        - name: protobuf
          url: /redpanda-connect/components/processors/protobuf/
          status: certified
        - name: schema_registry_decode
          url: /redpanda-connect/components/processors/schema_registry_decode/
          status: certified
        - name: schema_registry_encode
          url: /redpanda-connect/components/processors/schema_registry_encode/
          status: certified
        - name: string_split
          url: /redpanda-connect/components/processors/string_split/
          status: certified
        - name: ZIP
          url: /redpanda-connect/components/processors/unarchive/
          status: certified
        - name: xml
          url: /redpanda-connect/components/processors/xml/
          status: community
    - name: Composition
      description: Higher level processors that compose other processors and modify their behavior.
      items:
        - name: branch
          url: /redpanda-connect/components/processors/branch/
          status: certified
        - name: catch
          url: /redpanda-connect/components/processors/catch/
          status: certified
        - name: for_each
          url: /redpanda-connect/components/processors/for_each/
          status: certified
        - name: group_by
          url: /redpanda-connect/components/processors/group_by/
          status: certified
        - name: group_by_value
          url: /redpanda-connect/components/processors/group_by_value/
          status: certified
        - name: insert_part
          url: /redpanda-connect/components/processors/insert_part/
          status: certified
        - name: parallel
          url: /redpanda-connect/components/processors/parallel/
          status: certified
        - name: processors
          url: /redpanda-connect/components/processors/processors/
          status: certified
        - name: retry
          url: /redpanda-connect/components/processors/retry/
          status: certified
        - name: switch
          url: /redpanda-connect/components/processors/switch/
          status: certified
        - name: try
          url: /redpanda-connect/components/processors/try/
          status: certified
        - name: while
          url: /redpanda-connect/components/processors/while/
          status: certified
        - name: workflow
          url: /redpanda-connect/components/processors/workflow/
          status: certified
    - name: Utility
      description: Processors that provide general utility or do not fit in another category.
      items:
        - name: ZIP
          url: /redpanda-connect/components/processors/archive/
          status: certified
        - name: benchmark
          url: /redpanda-connect/components/processors/benchmark/
          status: certified
        - name: bounds_check
          url: /redpanda-connect/components/processors/bounds_check/
          status: certified
        - name: cached
          url: /redpanda-connect/components/processors/cached/
          status: certified
        - name: crash
          url: /redpanda-connect/components/processors/crash/
          status: certified
        - name: dedupe
          url: /redpanda-connect/components/processors/dedupe/
          status: certified
        - name: log
          url: /redpanda-connect/components/processors/log/
          status: certified
        - name: metric
          url: /redpanda-connect/components/processors/metric/
          status: certified
        - name: rate_limit
          url: /redpanda-connect/components/processors/rate_limit/
          status: certified
        - name: redpanda_data_transform
          url: /redpanda-connect/components/processors/redpanda_data_transform/
          status: certified
        - name: resource
          url: /redpanda-connect/components/processors/resource/
          status: certified
        - name: select_parts
          url: /redpanda-connect/components/processors/select_parts/
          status: certified
        - name: split
          url: /redpanda-connect/components/processors/split/
          status: certified
        - name: sleep
          url: /redpanda-connect/components/processors/sleep/
          status: certified
        - name: sync_response
          url: /redpanda-connect/components/processors/sync_response/
          status: certified
        - name: ZIP
          url: /redpanda-connect/components/processors/unarchive/
          status: certified
        - name: wasm
          url: /redpanda-connect/components/processors/wasm/
          status: community
  output:
    - name: Services
      description: Outputs that write to storage or message streaming services.
      items:
        - name: RabbitMQ
          url: /redpanda-connect/components/outputs/amqp_0_9/
          status: certified
        - name: RabbitMQ
          url: /redpanda-connect/components/outputs/amqp_1/
          status: community
        - name: Arc
          url: /redpanda-connect/components/outputs/arc/
          status: community
        - name: AWS DynamoDB
          url: /redpanda-connect/components/outputs/aws_dynamodb/
          status: community
        - name: AWS Kinesis
          url: /redpanda-connect/components/outputs/aws_kinesis/
          status: certified
        - name: AWS Kinesis Firehose
          url: /redpanda-connect/components/outputs/aws_kinesis_firehose/
          status: certified
        - name: AWS S3
          url: /redpanda-connect/components/outputs/aws_s3/
          status: certified
        - name: AWS SNS
          url: /redpanda-connect/components/outputs/aws_sns/
          status: community
        - name: AWS SQS
          url: /redpanda-connect/components/outputs/aws_sqs/
          status: certified
        - name: Azure Blob Storage
          url: /redpanda-connect/components/outputs/azure_blob_storage/
          status: certified
        - name: Microsoft Azure
          url: /redpanda-connect/components/outputs/azure_data_lake_gen2/
          status: certified
        - name: Azure Queue Storage
          url: /redpanda-connect/components/outputs/azure_queue_storage/
          status: certified
        - name: Azure Table Storage
          url: /redpanda-connect/components/outputs/azure_table_storage/
          status: certified
        - name: beanstalkd
          url: /redpanda-connect/components/outputs/beanstalkd/
          status: community
        - name: cache
          url: /redpanda-connect/components/outputs/cache/
          status: certified
        - name: cypher
          url: /redpanda-connect/components/outputs/cypher/
          status: community
        - name: discord
          url: /redpanda-connect/components/outputs/discord/
          status: community
        - name: elasticsearch_v8
          url: /redpanda-connect/components/outputs/elasticsearch_v8/
          status: certified
        - name: elasticsearch_v9
          url: /redpanda-connect/components/outputs/elasticsearch_v9/
          status: community
        - name: GCP BigQuery
          url: /redpanda-connect/components/outputs/gcp_bigquery/
          status: certified
        - name: GCP BigQuery
          url: /redpanda-connect/components/outputs/gcp_bigquery_write_api/
          status: certified
        - name: GCP Cloud Storage
          url: /redpanda-connect/components/outputs/gcp_cloud_storage/
          status: certified
        - name: GCP PubSub
          url: /redpanda-connect/components/outputs/gcp_pubsub/
          status: certified
        - name: hdfs
          url: /redpanda-connect/components/outputs/hdfs/
          status: community
        - name: Apache Iceberg
          url: /redpanda-connect/components/outputs/iceberg/
          status: certified
        - name: MongoDB
          url: /redpanda-connect/components/outputs/mongodb/
          status: certified
        - name: mqtt
          url: /redpanda-connect/components/outputs/mqtt/
          status: certified
        - name: NATS
          url: /redpanda-connect/components/outputs/nats/
          status: certified
        - name: NATS JetStream
          url: /redpanda-connect/components/outputs/nats_jetstream/
          status: certified
        - name: NATS KV
          url: /redpanda-connect/components/outputs/nats_kv/
          status: certified
        - name: NATS Stream
          url: /redpanda-connect/components/outputs/nats_stream/
          status: community
        - name: nsq
          url: /redpanda-connect/components/outputs/nsq/
          status: community
        - name: ockam_kafka
          url: /redpanda-connect/components/outputs/ockam_kafka/
          status: community
        - name: opensearch
          url: /redpanda-connect/components/outputs/opensearch/
          status: certified
        - name: OpenTelemetry
          url: /redpanda-connect/components/outputs/otlp_grpc/
          status: certified
        - name: OpenTelemetry
          url: /redpanda-connect/components/outputs/otlp_http/
          status: certified
        - name: Apache Pulsar
          url: /redpanda-connect/components/outputs/pulsar/
          status: community
        - name: pusher
          url: /redpanda-connect/components/outputs/pusher/
          status: community
        - name: questdb
          url: /redpanda-connect/components/outputs/questdb/
          status: certified
        - name: Redis Hash
          url: /redpanda-connect/components/outputs/redis_hash/
          status: certified
        - name: Redis List
          url: /redpanda-connect/components/outputs/redis_list/
          status: certified
        - name: Redis PubSub
          url: /redpanda-connect/components/outputs/redis_pubsub/
          status: certified
        - name: Redis Streams
          url: /redpanda-connect/components/outputs/redis_streams/
          status: certified
        - name: redpanda
          url: /redpanda-connect/components/outputs/redpanda/
          status: certified
        - name: redpanda_common
          url: /redpanda-connect/components/outputs/redpanda_common/
          status: certified
        - name: redpanda_migrator
          url: /redpanda-connect/components/outputs/redpanda_migrator/
          status: certified
        - name: Salesforce
          url: /redpanda-connect/components/outputs/salesforce_sink/
          status: certified
        - name: Snowflake
          url: /redpanda-connect/components/outputs/snowflake_put/
          status: certified
        - name: Snowflake Streaming
          url: /redpanda-connect/components/outputs/snowflake_streaming/
          status: certified
        - name: Splunk
          url: /redpanda-connect/components/outputs/splunk_hec/
          status: certified
        - name: SQL
          url: /redpanda-connect/components/outputs/sql_insert/
          status: certified
        - name: SQL
          url: /redpanda-connect/components/outputs/sql_raw/
          status: certified
        - name: timeplus
          url: /redpanda-connect/components/outputs/timeplus/
          status: community
    - name: Network
      description: Outputs that write directly to low level network protocols.
      items:
        - name: HTTP
          url: /redpanda-connect/components/outputs/http_client/
          status: certified
        - name: HTTP
          url: /redpanda-connect/components/outputs/http_server/
          status: certified
        - name: nanomsg
          url: /redpanda-connect/components/outputs/nanomsg/
          status: community
        - name: sftp
          url: /redpanda-connect/components/outputs/sftp/
          status: certified
        - name: socket
          url: /redpanda-connect/components/outputs/socket/
          status: certified
        - name: websocket
          url: /redpanda-connect/components/outputs/websocket/
          status: certified
        - name: zmq4
          url: /redpanda-connect/components/outputs/zmq4/
          status: community
    - name: AWS
      description: Outputs that write to Amazon Web Services products.
      items:
        - name: AWS DynamoDB
          url: /redpanda-connect/components/outputs/aws_dynamodb/
          status: community
        - name: AWS Kinesis
          url: /redpanda-connect/components/outputs/aws_kinesis/
          status: certified
        - name: AWS Kinesis Firehose
          url: /redpanda-connect/components/outputs/aws_kinesis_firehose/
          status: certified
        - name: AWS S3
          url: /redpanda-connect/components/outputs/aws_s3/
          status: certified
        - name: AWS SNS
          url: /redpanda-connect/components/outputs/aws_sns/
          status: community
        - name: AWS SQS
          url: /redpanda-connect/components/outputs/aws_sqs/
          status: certified
        - name: Apache Iceberg
          url: /redpanda-connect/components/outputs/iceberg/
          status: certified
    - name: GCP
      description: Outputs that write to Google Cloud Platform services.
      items:
        - name: GCP BigQuery
          url: /redpanda-connect/components/outputs/gcp_bigquery/
          status: certified
        - name: GCP BigQuery
          url: /redpanda-connect/components/outputs/gcp_bigquery_write_api/
          status: certified
        - name: GCP Cloud Storage
          url: /redpanda-connect/components/outputs/gcp_cloud_storage/
          status: certified
        - name: GCP PubSub
          url: /redpanda-connect/components/outputs/gcp_pubsub/
          status: certified
        - name: Apache Iceberg
          url: /redpanda-connect/components/outputs/iceberg/
          status: certified
    - name: Azure
      description: Outputs that write to Microsoft Azure services.
      items:
        - name: Azure Blob Storage
          url: /redpanda-connect/components/outputs/azure_blob_storage/
          status: certified
        - name: Microsoft Azure
          url: /redpanda-connect/components/outputs/azure_cosmosdb/
          status: certified
        - name: Microsoft Azure
          url: /redpanda-connect/components/outputs/azure_data_lake_gen2/
          status: certified
        - name: Azure Queue Storage
          url: /redpanda-connect/components/outputs/azure_queue_storage/
          status: certified
        - name: Azure Table Storage
          url: /redpanda-connect/components/outputs/azure_table_storage/
          status: certified
        - name: Apache Iceberg
          url: /redpanda-connect/components/outputs/iceberg/
          status: certified
    - name: Social
      description: Outputs that write to social applications and services.
      items:
        - name: discord
          url: /redpanda-connect/components/outputs/discord/
          status: community
    - name: Local
      description: Outputs that write to the local machine/filesystem.
      items:
        - name: file
          url: /redpanda-connect/components/outputs/file/
          status: certified
        - name: stdout
          url: /redpanda-connect/components/outputs/stdout/
          status: certified
    - name: Utility
      description: Outputs that provide utility by combining/wrapping other outputs.
      items:
        - name: broker
          url: /redpanda-connect/components/outputs/broker/
          status: certified
        - name: drop
          url: /redpanda-connect/components/outputs/drop/
          status: certified
        - name: drop_on
          url: /redpanda-connect/components/outputs/drop_on/
          status: certified
        - name: dynamic
          url: /redpanda-connect/components/outputs/dynamic/
          status: community
        - name: fallback
          url: /redpanda-connect/components/outputs/fallback/
          status: certified
        - name: inproc
          url: /redpanda-connect/components/outputs/inproc/
          status: certified
        - name: reject
          url: /redpanda-connect/components/outputs/reject/
          status: certified
        - name: reject_errored
          url: /redpanda-connect/components/outputs/reject_errored/
          status: certified
        - name: resource
          url: /redpanda-connect/components/outputs/resource/
          status: certified
        - name: retry
          url: /redpanda-connect/components/outputs/retry/
          status: certified
        - name: subprocess
          url: /redpanda-connect/components/outputs/subprocess/
          status: community
        - name: switch
          url: /redpanda-connect/components/outputs/switch/
          status: certified
        - name: sync_response
          url: /redpanda-connect/components/outputs/sync_response/
          status: certified
latest-operator-version: v26.1.4
latest-console-tag: v3.7.3
latest-redpanda-tag: v26.1.9
docname: bloblang/about
page-component-name: redpanda-connect
page-version: master
page-component-version: master
page-component-title: Connect
page-relative-src-path: bloblang/about.adoc
page-edit-url: https://github.com/redpanda-data/rp-connect-docs/edit/main/modules/guides/pages/bloblang/about.adoc
description: Learn what Bloblang is and how to use the native mapping language.
page-git-created-date: "2024-05-24"
page-git-modified-date: "2026-03-13"
---

<!-- Source: https://docs.redpanda.com/redpanda-connect/guides/bloblang/about.md -->

Bloblang, or blobl for short, is a language designed for mapping data of a wide variety of forms. It’s a safe, fast, and powerful way to perform document mapping within Redpanda Connect. It also has a [Go API for writing your own functions and methods](https://pkg.go.dev/github.com/redpanda-data/connect/v4/public/bloblang) as plugins.

Bloblang is available as a [processor](https://docs.redpanda.com/redpanda-connect/components/processors/mapping/) and it’s also possible to use blobl queries in [function interpolations](https://docs.redpanda.com/redpanda-connect/configuration/interpolation/#bloblang-queries).

You can also execute Bloblang mappings on the command-line with the `blobl` subcommand:

```shell
cat data.jsonl | rpk connect blobl 'foo.(bar | baz).buz'
```

This document outlines the core features of the Bloblang language, but if you’re totally new to Bloblang then it’s worth following [the walkthrough first](https://docs.redpanda.com/redpanda-connect/guides/bloblang/walkthrough/).

## [](#learn-bloblang)Learn Bloblang

[learnbloblang.com](https://www.learnbloblang.com) is an interactive resource for learning Bloblang with hands-on exercises.

## [](#assignment)Assignment

A Bloblang mapping expresses how to create a new document by extracting data from an existing input document. Assignments consist of a dot separated path segments on the left-hand side describing a field to be created within the new document, and a right-hand side query describing what the content of the new field should be.

The keyword `root` on the left-hand side refers to the root of the new document, the keyword `this` on the right-hand side refers to the current context of the query, which is the read-only input document when querying from the root of a mapping:

```bloblang
root.id = this.thing.id
root.type = "yo"

# Both `root` and `this` are optional, and will be inferred in their absence.
content = thing.doc.message

# In:  {"thing":{"id":"wat1","doc":{"title":"wut","message":"hello world"}}}
```

Since the document being created starts off empty it is sometimes useful to begin a mapping by copying the entire contents of the input document, which can be expressed by assigning `this` to `root`.

```bloblang
root = this
root.foo = "added value"

# In:  {"id":"wat1","message":"hello world"}
```

If the new document `root` is never assigned to or otherwise mutated then the original document remains unchanged.

### [](#special-characters-in-paths)Special characters in paths

Quotes can be used to describe sections of a field path that contain whitespace, dots or other special characters:

```bloblang
# Use quotes around a path segment in order to include whitespace or dots within
# the path
root."foo.bar".baz = this."buz bev".fub

# In:  {"buz bev":{"fub":"hello world"}}
```

### [](#non-structured-data)Non-structured data

Bloblang is able to map data that is unstructured, whether it’s a log line or a binary blob, by referencing it with the [`content` function](https://docs.redpanda.com/redpanda-connect/guides/bloblang/functions/#content), which returns the raw bytes of the input document:

```bloblang
# Parse a base64 encoded JSON document
root = content().decode("base64").parse_json()

# In:  eyJmb28iOiJiYXIifQ==
```

And your newly mapped document can also be unstructured, simply assign a value type to the `root` of your document:

```bloblang
root = this.foo

# In:  {"foo":"hello world"}
```

And the resulting message payload will be the raw value you’ve assigned.

### [](#deleting)Deleting

It’s possible to selectively delete fields from an object by assigning the function `deleted()` to the field path:

```bloblang
root = this
root.bar = deleted()

# In:  {"id":"wat1","message":"hello world","bar":"remove me"}
```

### [](#variables)Variables

Another type of assignment is a `let` statement, which creates a variable that can be referenced elsewhere within a mapping. Variables are discarded at the end of the mapping and are mostly useful for query reuse. Variables are referenced within queries with `$`:

```bloblang
# Set a temporary variable
let foo = "yo"

root.new_doc.type = $foo
```

### [](#metadata)Metadata

Redpanda Connect messages contain metadata that is separate from the main payload, in Bloblang you can modify the metadata of the resulting message with the `meta` assignment keyword. Metadata values of the resulting message are referenced within queries with the `@` operator or the [`metadata()` function](https://docs.redpanda.com/redpanda-connect/guides/bloblang/functions/#metadata):

```bloblang
# Reference a metadata value
root.new_doc.bar = @kafka_topic # Or `@.kafka_topic` or `metadata("kafka_topic")`

# Delete all metadata
meta = deleted()

# Set metadata values
meta bar = "hello world"
meta baz = {
  "something": "structured"
}

# Get an object of key/values for all metadata
root.meta_obj = @ # Or `metadata()`
```

## [](#coalesce)Coalesce

The pipe operator (`|`) used within brackets allows you to coalesce multiple candidates for a path segment. The first field that exists and has a non-null value will be selected:

```bloblang
root.new_doc.type = this.thing.(article | comment | this).type

# In:  {"thing":{"article":{"type":"foo"}}}

# In:  {"thing":{"comment":{"type":"bar"}}}

# In:  {"thing":{"type":"baz"}}
```

Opening brackets on a field begins a query where the context of `this` changes to value of the path it is opened upon, therefore in the above example `this` within the brackets refers to the contents of `this.thing`.

## [](#literals)Literals

Bloblang supports number, boolean, string, null, array and object literals:

```bloblang
root = [
  7, false, "string", null, {
    "first": 11,
    "second": {"foo":"bar"},
    "third": """multiple
lines on this
string"""
  }
]

# In:  {}
```

The values within literal arrays and objects can be dynamic query expressions, as well as the keys of object literals.

## [](#comments)Comments

You might’ve already spotted, comments are started with a hash (`#`) and end with a line break:

```bloblang
root = this.some.value # And now this is a comment
```

## [](#boolean-logic-and-arithmetic)Boolean logic and arithmetic

Bloblang supports a range of boolean operators `!`, `>`, `>=`, `==`, `<`, `<=`, `&&`, `||` and mathematical operators `+`, `-`, `*`, `/`, `%`:

```bloblang
root.is_big = this.number > 100
root.multiplied = this.number * 7

# In:  {"number":50}

# In:  {"number":150}
```

For more information about these operators and how they work check out [the arithmetic page](https://docs.redpanda.com/redpanda-connect/guides/bloblang/arithmetic/).

## [](#conditional-mapping)Conditional mapping

Use `if` as either a statement or an expression in order to perform maps conditionally:

```bloblang
root = this

root.sorted_foo = if this.foo.type() == "array" { this.foo.sort() }

if this.foo.type() == "string" {
  root.upper_foo = this.foo.uppercase()
  root.lower_foo = this.foo.lowercase()
}

# In:  {"foo":"FooBar"}

# In:  {"foo":["foo","bar"]}
```

And add as many `else if` queries as you like, followed by an optional final fallback `else`:

```bloblang
root.sound = if this.type == "cat" {
  this.cat.meow
} else if this.type == "dog" {
  this.dog.woof.uppercase()
} else {
  "sweet sweet silence"
}

# In:  {"type":"cat","cat":{"meow":"meeeeooooow!"}}

# In:  {"type":"dog","dog":{"woof":"guurrrr woof woof!"}}

# In:  {"type":"caterpillar","caterpillar":{"name":"oleg"}}
```

## [](#pattern-matching)Pattern matching

A `match` expression allows you to perform conditional mappings on a value, each case should be either a boolean expression, a literal value to compare against the target value, or an underscore (`_`) which captures values that have not matched a prior case:

```bloblang
root.new_doc = match this.doc {
  this.type == "article" => this.article
  this.type == "comment" => this.comment
  _ => this
}

# In:  {"doc":{"type":"article","article":{"id":"foo","content":"qux"}}}

# In:  {"doc":{"type":"comment","comment":{"id":"bar","content":"quz"}}}

# In:  {"doc":{"type":"neither","content":"some other stuff unchanged"}}
```

Within a match block the context of `this` changes to the pattern matched expression, therefore `this` within the match expression above refers to `this.doc`.

Match cases can specify a literal value for simple comparison:

```bloblang
root = this
root.type = match this.type { "doc" => "document", "art" => "article", _ => this }

# In:  {"type":"doc","foo":"bar"}
```

The match expression can also be left unset which means the context remains unchanged, and the catch-all case can also be omitted:

```bloblang
root.new_doc = match {
  this.doc.type == "article" => this.doc.article
  this.doc.type == "comment" => this.doc.comment
}

# In:  {"doc":{"type":"neither","content":"some other stuff unchanged"}}
```

If no case matches then the mapping is skipped entirely, hence we would end up with the original document in this case.

## [](#functions)Functions

Functions can be placed anywhere and allow you to extract information from your environment, generate values, or access data from the underlying message being mapped:

```bloblang
root.doc.id = uuid_v4()
root.doc.received_at = now()
root.doc.host = hostname()
```

Functions support both named and nameless style arguments:

```bloblang
root.values_one = range(start: 0, stop: this.max, step: 2)
root.values_two = range(0, this.max, 2)

# In:  {"max":10}
```

You can find a full list of functions and their parameters in [the functions page](https://docs.redpanda.com/redpanda-connect/guides/bloblang/functions/).

## [](#methods)Methods

Methods are similar to functions but enact upon a target value, these provide most of the power in Bloblang as they allow you to augment query values and can be added to any expression (including other methods):

```bloblang
root.doc.id = this.thing.id.string().catch(uuid_v4())
root.doc.reduced_nums = this.thing.nums.map_each(num -> if num < 10 {
  deleted()
} else {
  num - 10
})
root.has_good_taste = ["pikachu","mewtwo","magmar"].contains(this.user.fav_pokemon)

# In:  {"thing":{"id":123,"nums":[5,12,8,15,20]},"user":{"fav_pokemon":"pikachu"}}
```

Methods also support both named and nameless style arguments:

```bloblang
root.foo_one = this.(bar | baz).trim().replace_all(old: "dog", new: "cat")
root.foo_two = this.(bar | baz).trim().replace_all("dog", "cat")

# In:  {"bar":"  I love my dog  "}
```

You can find a full list of methods and their parameters in [the methods page](https://docs.redpanda.com/redpanda-connect/guides/bloblang/methods/).

## [](#maps)Maps

Defining named maps allows you to reuse common mappings on values with the [`apply` method](https://docs.redpanda.com/redpanda-connect/guides/bloblang/methods/#apply):

```bloblang
map things {
  root.first  = this.thing_one
  root.second = this.thing_two
}

root.foo = this.value_one.apply("things")
root.bar = this.value_two.apply("things")

# In:  {"value_one":{"thing_one":"hey","thing_two":"yo"},"value_two":{"thing_one":"sup","thing_two":"waddup"}}
```

Within a map the keyword `root` refers to a newly created document that will replace the target of the map, and `this` refers to the original value of the target. The argument of `apply` is a string, which allows you to dynamically resolve the mapping to apply.

## [](#import-maps)Import maps

It’s possible to import maps defined in a file with an `import` statement:

```bloblang
import "./common_maps.blobl"

root.foo = this.value_one.apply("things")
root.bar = this.value_two.apply("things")

# In:  {"value_one":{"thing_one":"hey","thing_two":"yo"},"value_two":{"thing_one":"sup","thing_two":"waddup"}}
```

Imports from a Bloblang mapping within a Redpanda Connect config are relative to the process running the config. Imports from an imported file are relative to the file that is importing it.

## [](#filtering)Filtering

By assigning the root of a mapped document to the `deleted()` function you can delete a message entirely:

```bloblang
# Filter all messages that have fewer than 10 URLs.
root = if this.doc.urls.length() < 10 { deleted() }

# In:  {"doc":{"urls":["a","b","c"]}}

# In:  {"doc":{"urls":["a","b","c","d","e","f","g","h","i","j"]}}
```

## [](#error-handling)Error handling

Functions and methods can fail under certain circumstances, such as when they receive types they aren’t able to act upon. These failures, when not caught, will cause the entire mapping to fail. However, the [method `catch`](https://docs.redpanda.com/redpanda-connect/guides/bloblang/methods/#catch) can be used in order to return a value when a failure occurs instead:

```bloblang
# Map an empty array to `foo` if the field `bar` is not a string.
root.foo = this.bar.split(",").catch([])

# In:  {"bar":"a,b,c"}

# In:  {"bar":123}
```

Since `catch` is a method it can also be attached to bracketed map expressions:

```bloblang
# Map `false` if any of the operations in this boolean query fail.
root.thing = ( this.foo > this.bar && this.baz.contains("wut") ).catch(false)

# In:  {"foo":10,"bar":5,"baz":"wut wut"}

# In:  {"foo":"not a number","bar":5,"baz":"wut wut"}
```

And one of the more powerful features of Bloblang is that a single `catch` method at the end of a chain of methods can recover errors from any method in the chain:

```bloblang
# Catch errors caused by:
# - foo not existing
# - foo not being a string
# - an element from split foo not being a valid JSON string
root.things = this.foo.split(",").map_each( ele -> ele.parse_json() ).catch([])

# Specifically catch a JSON parse error
root.things = this.foo.split(",").map_each( ele -> ele.parse_json().catch({}) )

# In:  {"foo":"{\"a\":1},{\"b\":2}"}

# In:  {"foo":"not valid json"}
```

However, the `catch` method only acts on errors, sometimes it’s also useful to set a fall back value when a query returns `null` in which case the [method `or`](https://docs.redpanda.com/redpanda-connect/guides/bloblang/methods/#or) can be used the same way:

```bloblang
# Map "default" if either the element index 5 does not exist, or the underlying
# element is `null`.
root.foo = this.bar.index(5).or("default")

# In:  {"bar":["a","b","c"]}

# In:  {"bar":["a","b","c","d","e","f","g"]}
```

## [](#unit-testing)Unit testing

It’s possible to execute unit tests for your Bloblang mappings using the standard Redpanda Connect unit test capabilities outlined [in this document](https://docs.redpanda.com/redpanda-connect/configuration/unit_testing/).

## [](#troubleshooting)Troubleshooting

1.  I’m seeing `unable to reference message as structured (with 'this')` when I try to run mappings with `rpk connect blobl`.


That particular error message means the mapping is failing to parse what’s being fed in as a JSON document. Make sure that the data you are feeding in is valid JSON, and also that the documents _do not_ contain line breaks as `rpk connect blobl` will parse each line individually.

Why? That’s a good question. Bloblang supports non-JSON formats too, so it can’t delimit documents with a streaming JSON parser like tools such as `jq`, so instead it uses line breaks to determine the boundaries of each message.
