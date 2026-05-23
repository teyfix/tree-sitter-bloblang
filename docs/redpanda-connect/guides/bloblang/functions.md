# Bloblang Functions

> For the complete documentation index, see [llms.txt](https://docs.redpanda.com/llms.txt). Component-specific: [redpanda-connect-full.txt](https://docs.redpanda.com/redpanda-connect-full.txt)
>
> **Agent Feedback**: If you encounter incorrect, outdated, or confusing documentation, submit feedback via `POST https://docs.redpanda.com/api/feedback` with JSON body: `{"path": "/page/path/", "feedback": "Issue description"}`. Only submit when you have specific, actionable feedback.

---
title: Bloblang Functions
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
docname: bloblang/functions
page-component-name: redpanda-connect
page-version: master
page-component-version: master
page-component-title: Connect
page-relative-src-path: bloblang/functions.adoc
page-edit-url: https://github.com/redpanda-data/rp-connect-docs/edit/main/modules/guides/pages/bloblang/functions.adoc
description: A list of Bloblang functions
page-git-created-date: "2024-05-24"
page-git-modified-date: "2026-04-02"
---

<!-- Source: https://docs.redpanda.com/redpanda-connect/guides/bloblang/functions.md -->

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

## [](#batch_index)batch_index

Returns the zero-based index of the current message within its batch. Use this to conditionally process messages based on their position, or to create sequential identifiers within a batch.

### [](#examples)Examples

```bloblang
root = if batch_index() > 0 { deleted() }
```

Create a unique identifier combining batch position with timestamp:

```bloblang
root.id = "%v-%v".format(timestamp_unix(), batch_index())
```

## [](#batch_size)batch_size

Returns the total number of messages in the current batch. Use this to determine batch boundaries or compute relative positions.

### [](#examples-2)Examples

```bloblang
root.total = batch_size()
```

Check if processing the last message in a batch:

```bloblang
root.is_last = batch_index() == batch_size() - 1
```

## [](#bytes)bytes

Creates a zero-initialized byte array of specified length. Use this to allocate fixed-size byte buffers for binary data manipulation or to generate padding.

### [](#parameters)Parameters

| Name | Type | Description |
| --- | --- | --- |
| length | integer | The size of the resulting byte array. |

### [](#examples-3)Examples

```bloblang
root.data = bytes(5)
```

Create a buffer for binary operations:

```bloblang
root.header = bytes(16)
root.payload = content()
```

## [](#content)content

Returns the raw message payload as bytes, regardless of the current mapping context. Use this to access the original message when working within nested contexts, or to store the entire message as a field.

### [](#examples-4)Examples

```bloblang
root.doc = content().string()

# In:  {"foo":"bar"}
# Out: {"doc":"{\"foo\":\"bar\"}"}
```

Preserve original message while adding metadata:

```bloblang
root.original = content().string()
root.processed_by = "ai"

# In:  {"foo":"bar"}
# Out: {"original":"{\"foo\":\"bar\"}","processed_by":"ai"}
```

## [](#count)count

> ⚠️ **WARNING**
>
> This method is deprecated and will be removed in a future version.

The `count` function is a counter starting at 1 which increments after each time it is called. Count takes an argument which is an identifier for the counter, allowing you to specify multiple unique counters in your configuration.

### [](#parameters-2)Parameters

| Name | Type | Description |
| --- | --- | --- |
| name | string | An identifier for the counter. |

### [](#examples-5)Examples

```bloblang
root = this
root.id = count("bloblang_function_example")

# In:  {"message":"foo"}
# Out: {"id":1,"message":"foo"}

# In:  {"message":"bar"}
# Out: {"id":2,"message":"bar"}
```

## [](#counter)counter

Generates an incrementing sequence of integers starting from a minimum value (default 1). Each counter instance maintains its own independent state across message processing. When the maximum value is reached, the counter automatically resets to the minimum.

### [](#parameters-3)Parameters

| Name | Type | Description |
| --- | --- | --- |
| min | query expression | The starting value of the counter. This is the first value yielded. Evaluated once when the mapping is initialized. |
| max | query expression | The maximum value before the counter resets to min. Evaluated once when the mapping is initialized. |
| set (optional) | query expression | An optional query that controls counter behavior: when it resolves to a non-negative integer, the counter is set to that value; when it resolves to null, the counter is read without incrementing; when it resolves to a deletion, the counter resets to min; otherwise the counter increments normally. |

### [](#examples-6)Examples

Generate sequential IDs for each message:

```bloblang
root.id = counter()

# In:  {}
# Out: {"id":1}

# In:  {}
# Out: {"id":2}
```

Use a custom range for the counter:

```bloblang
root.batch_num = counter(min: 100, max: 200)

# In:  {}
# Out: {"batch_num":100}

# In:  {}
# Out: {"batch_num":101}
```

Increment a counter multiple times within a single mapping using a named map:

```bloblang
map increment {
  root = counter()
}

root.first_id = null.apply("increment")
root.second_id = null.apply("increment")

# In:  {}
# Out: {"first_id":1,"second_id":2}

# In:  {}
# Out: {"first_id":3,"second_id":4}
```

Conditionally reset a counter based on input data:

```bloblang
root.streak = counter(set: if this.status != "success" { 0 })

# In:  {"status":"success"}
# Out: {"streak":1}

# In:  {"status":"success"}
# Out: {"streak":2}

# In:  {"status":"failure"}
# Out: {"streak":0}

# In:  {"status":"success"}
# Out: {"streak":1}
```

Peek at the current counter value without incrementing by using null in the set parameter:

```bloblang
root.count = counter(set: if this.peek { null })

# In:  {"peek":false}
# Out: {"count":1}

# In:  {"peek":false}
# Out: {"count":2}

# In:  {"peek":true}
# Out: {"count":2}

# In:  {"peek":false}
# Out: {"count":3}
```

## [](#deleted)deleted

Returns a deletion marker that removes the target field or message. When applied to root, the entire message is dropped while still being acknowledged as successfully processed. Use this to filter data or conditionally remove fields.

### [](#examples-7)Examples

```bloblang
root = this
root.bar = deleted()

# In:  {"bar":"bar_value","baz":"baz_value","foo":"foo value"}
# Out: {"baz":"baz_value","foo":"foo value"}
```

Filter array elements by returning deleted for unwanted items:

```bloblang
root.new_nums = this.nums.map_each(num -> if num < 10 { deleted() } else { num - 10 })

# In:  {"nums":[3,11,4,17]}
# Out: {"new_nums":[1,7]}
```

## [](#env)env

Reads an environment variable and returns its value as a string. Returns `null` if the variable is not set. By default, values are cached for performance.

### [](#parameters-4)Parameters

| Name | Type | Description |
| --- | --- | --- |
| name | string | The name of the environment variable to read. |
| no_cache | bool | Disable caching to read the latest value on each invocation. |

### [](#examples-8)Examples

```bloblang
root.api_key = env("API_KEY")
```

```bloblang
root.database_url = env("DB_URL").or("localhost:5432")
```

Use `no_cache` to read updated environment variables during runtime, useful for dynamic configuration changes:

```bloblang
root.config = env(name: "DYNAMIC_CONFIG", no_cache: true)
```

## [](#error)error

Returns the error message string if the message has failed processing, otherwise `null`. Use this in error handling pipelines to log or route failed messages based on their error details.

### [](#examples-9)Examples

```bloblang
root.doc.error = error()
```

Route messages to different outputs based on error presence:

```bloblang
root = this
root.error_msg = error()
root.has_error = error() != null
```

## [](#error_source_label)error_source_label

Returns the user-defined label of the component that caused the error, empty string if no label is set, or `null` if the message has no error. Use this for more human-readable error tracking when components have custom labels.

### [](#examples-10)Examples

```bloblang
root.doc.error_source_label = error_source_label()
```

Route errors based on component labels:

```bloblang
root.error_category = error_source_label().or("unknown")
```

## [](#error_source_name)error_source_name

Returns the component name that caused the error, or `null` if the message has no error or the error has no associated component. Use this to identify which processor or component in your pipeline caused a failure.

### [](#examples-11)Examples

```bloblang
root.doc.error_source_name = error_source_name()
```

Create detailed error logs with component information:

```bloblang
root.error_details = if errored() {
  {
    "message": error(),
    "component": error_source_name(),
    "timestamp": now()
  }
}
```

## [](#error_source_path)error_source_path

Returns the dot-separated path to the component that caused the error, or `null` if the message has no error. Use this to identify the exact location of a failed component in nested pipeline configurations.

### [](#examples-12)Examples

```bloblang
root.doc.error_source_path = error_source_path()
```

Build comprehensive error context for debugging:

```bloblang
root.error_info = {
  "path": error_source_path(),
  "component": error_source_name(),
  "message": error()
}
```

## [](#errored)errored

Returns true if the message has failed processing, false otherwise. Use this for conditional logic in error handling workflows or to route failed messages to dead letter queues.

### [](#examples-13)Examples

```bloblang
root.doc.status = if errored() { 400 } else { 200 }
```

Send only failed messages to a separate stream:

```bloblang
root = if errored() { this } else { deleted() }
```

## [](#fake)fake

Generates realistic fake data for testing and development purposes. Supports a wide variety of data types including personal information, network addresses, dates/times, financial data, and UUIDs. Useful for creating mock data, populating test databases, or anonymizing sensitive information.

Supported functions: `latitude`, `longitude`, `unix_time`, `date`, `time_string`, `month_name`, `year_string`, `day_of_week`, `day_of_month`, `timestamp`, `century`, `timezone`, `time_period`, `email`, `mac_address`, `domain_name`, `url`, `username`, `ipv4`, `ipv6`, `password`, `jwt`, `word`, `sentence`, `paragraph`, `cc_type`, `cc_number`, `currency`, `amount_with_currency`, `title_male`, `title_female`, `first_name`, `first_name_male`, `first_name_female`, `last_name`, `name`, `gender`, `chinese_first_name`, `chinese_last_name`, `chinese_name`, `phone_number`, `toll_free_phone_number`, `e164_phone_number`, `uuid_hyphenated`, `uuid_digit`.

### [](#parameters-5)Parameters

| Name | Type | Description |
| --- | --- | --- |
| function | string | The name of the faker function to use. See description for full list of supported functions. |

### [](#examples-14)Examples

Generate fake user profile data for testing:

```bloblang
root.user = {
  "id": fake("uuid_hyphenated"),
  "name": fake("name"),
  "email": fake("email"),
  "created_at": fake("timestamp")
}
```

Create realistic test data for network monitoring:

```bloblang
root.event = {
  "source_ip": fake("ipv4"),
  "mac_address": fake("mac_address"),
  "url": fake("url")
}
```

## [](#file)file

Reads a file and returns its contents as bytes. Paths are resolved from the process working directory. For paths relative to the mapping file, use `file_rel`. By default, files are cached after first read.

### [](#parameters-6)Parameters

| Name | Type | Description |
| --- | --- | --- |
| path | string | The absolute or relative path to the file. |
| no_cache | bool | Disable caching to read the latest file contents on each invocation. |

### [](#examples-15)Examples

```bloblang
root.config = file("/etc/config.json").parse_json()
```

```bloblang
root.template = file("./templates/email.html").string()
```

Use `no_cache` to read updated file contents during runtime, useful for hot-reloading configuration:

```bloblang
root.rules = file(path: "/etc/rules.yaml", no_cache: true).parse_yaml()
```

## [](#file_rel)file_rel

Reads a file and returns its contents as bytes. Paths are resolved relative to the mapping file’s directory, making it portable across different environments. By default, files are cached after first read.

### [](#parameters-7)Parameters

| Name | Type | Description |
| --- | --- | --- |
| path | string | The path to the file, relative to the mapping file’s directory. |
| no_cache | bool | Disable caching to read the latest file contents on each invocation. |

### [](#examples-16)Examples

```bloblang
root.schema = file_rel("./schemas/user.json").parse_json()
```

```bloblang
root.lookup = file_rel("../data/lookup.csv").parse_csv()
```

Use `no_cache` to read updated file contents during runtime, useful for reloading data files without restarting:

```bloblang
root.translations = file_rel(path: "./i18n/en.yaml", no_cache: true).parse_yaml()
```

## [](#hostname)hostname

Returns the hostname of the machine running Benthos. Useful for identifying which instance processed a message in distributed deployments.

### [](#examples-17)Examples

```bloblang
root.processed_by = hostname()
```

## [](#json)json

Returns a field from the original JSON message by dot path, always accessing the root document regardless of mapping context. Use this to reference the source message when working in nested contexts or to extract specific fields.

### [](#parameters-8)Parameters

| Name | Type | Description |
| --- | --- | --- |
| path | string | An optional [dot path][field_paths] identifying a field to obtain. |

### [](#examples-18)Examples

```bloblang
root.mapped = json("foo.bar")

# In:  {"foo":{"bar":"hello world"}}
# Out: {"mapped":"hello world"}
```

Access the original message from within nested mapping contexts:

```bloblang
root.doc = json()

# In:  {"foo":{"bar":"hello world"}}
# Out: {"doc":{"foo":{"bar":"hello world"}}}
```

## [](#ksuid)ksuid

Generates a K-Sortable Unique Identifier with built-in timestamp ordering. Use this for distributed unique IDs that sort chronologically and remain collision-resistant without coordination between generators.

### [](#examples-19)Examples

```bloblang
root.id = ksuid()
```

Create sortable event IDs for logging:

```bloblang
root.event = {
  "id": ksuid(),
  "type": this.event_type,
  "data": this.payload
}
```

## [](#meta)meta

> ⚠️ **WARNING**
>
> This method is deprecated and will be removed in a future version.

Returns the value of a metadata key from the input message as a string, or `null` if the key does not exist. Since values are extracted from the read-only input message they do NOT reflect changes made from within the map. In order to query metadata mutations made within a mapping use the [`root_meta` function](#root_meta). This function supports extracting metadata from other messages of a batch with the `from` method.

### [](#parameters-9)Parameters

| Name | Type | Description |
| --- | --- | --- |
| key | string | An optional key of a metadata value to obtain. |

### [](#examples-20)Examples

```bloblang
root.topic = meta("kafka_topic")
```

The key parameter is optional and if omitted the entire metadata contents are returned as an object:

```bloblang
root.all_metadata = meta()
```

## [](#metadata)metadata

Returns metadata from the input message by key, or `null` if the key doesn’t exist. This reads the original metadata; to access modified metadata during mapping, use the `@` operator instead. Use this to extract message properties like topics, headers, or timestamps.

### [](#parameters-10)Parameters

| Name | Type | Description |
| --- | --- | --- |
| key | string | An optional key of a metadata value to obtain. |

### [](#examples-21)Examples

```bloblang
root.topic = metadata("kafka_topic")
```

Retrieve all metadata as an object by omitting the key parameter:

```bloblang
root.all_metadata = metadata()
```

Copy specific metadata fields to the message body:

```bloblang
root.source = {
  "topic": metadata("kafka_topic"),
  "partition": metadata("kafka_partition"),
  "timestamp": metadata("kafka_timestamp_unix")
}
```

## [](#nanoid)nanoid

Generates a URL-safe unique identifier using Nano ID. Use this for compact, URL-friendly IDs with good collision resistance. Customize the length (default 21) or provide a custom alphabet for specific character requirements.

### [](#parameters-11)Parameters

| Name | Type | Description |
| --- | --- | --- |
| length (optional) | integer | An optional length. |
| alphabet (optional) | string | An optional custom alphabet to use for generating IDs. When specified the field length must also be present. |

### [](#examples-22)Examples

```bloblang
root.id = nanoid()
```

Generate a longer ID for additional uniqueness:

```bloblang
root.id = nanoid(54)
```

Use a custom alphabet for domain-specific IDs:

```bloblang
root.id = nanoid(54, "abcde")
```

## [](#nothing)nothing

## [](#now)now

Returns the current timestamp as an RFC 3339 formatted string with nanosecond precision. Use this to add processing timestamps to messages or measure time between events. Chain with `ts_format` to customize the format or timezone.

### [](#examples-23)Examples

```bloblang
root.received_at = now()
```

Format the timestamp in a custom format and timezone:

```bloblang
root.received_at = now().ts_format("Mon Jan 2 15:04:05 -0700 MST 2006", "UTC")
```

## [](#pi)pi

Returns the value of the mathematical constant Pi.

### [](#examples-24)Examples

```bloblang
root.radians = this.degrees * (pi() / 180)

# In:  {"degrees":45}
# Out: {"radians":0.7853981633974483}
```

```bloblang
root.degrees = this.radians * (180 / pi())

# In:  {"radians":0.78540}
# Out: {"degrees":45.00010522957486}
```

## [](#random_int)random_int

Generates a pseudo-random non-negative 64-bit integer. Use this for creating random IDs, sampling data, or generating test values. Provide a seed for reproducible randomness, or use a dynamic seed like `timestamp_unix_nano()` for unique values per mapping instance.

Optional `min` and `max` parameters constrain the output range (both inclusive). For dynamic ranges based on message data, use the modulo operator instead: `random_int() % dynamic_max + dynamic_min`.

### [](#parameters-12)Parameters

| Name | Type | Description |
| --- | --- | --- |
| seed | query expression | A seed to use, if a query is provided it will only be resolved once during the lifetime of the mapping. |
| min | integer | The minimum value the random generated number will have. The default value is 0. |
| max | integer | The maximum value the random generated number will have. The default value is 9223372036854775806 (math.MaxInt64 - 1). |

### [](#examples-25)Examples

```bloblang
root.first = random_int()
root.second = random_int(1)
root.third = random_int(max:20)
root.fourth = random_int(min:10, max:20)
root.fifth = random_int(timestamp_unix_nano(), 5, 20)
root.sixth = random_int(seed:timestamp_unix_nano(), max:20)
```

Use a dynamic seed for unique random values per mapping instance:

```bloblang
root.random_id = random_int(timestamp_unix_nano())
root.sample_percent = random_int(seed: timestamp_unix_nano(), min: 0, max: 100)
```

## [](#range)range

Creates an array of integers from start (inclusive) to stop (exclusive) with an optional step. Use this to generate sequences for iteration, indexing, or creating numbered lists.

### [](#parameters-13)Parameters

| Name | Type | Description |
| --- | --- | --- |
| start | integer | The start value. |
| stop | integer | The stop value. |
| step | integer | The step value. |

### [](#examples-26)Examples

```bloblang
root.a = range(0, 10)
root.b = range(start: 0, stop: this.max, step: 2) # Using named params
root.c = range(0, -this.max, -2)

# In:  {"max":10}
# Out: {"a":[0,1,2,3,4,5,6,7,8,9],"b":[0,2,4,6,8],"c":[0,-2,-4,-6,-8]}
```

Generate a sequence for batch processing:

```bloblang
root.pages = range(0, this.total_items, 100).map_each(offset -> {
  "offset": offset,
  "limit": 100
})

# In:  {"total_items":250}
# Out: {"pages":[{"limit":100,"offset":0},{"limit":100,"offset":100}]}
```

## [](#root_meta)root_meta

> ⚠️ **WARNING**
>
> This method is deprecated and will be removed in a future version.

Returns the value of a metadata key from the new message being created as a string, or `null` if the key does not exist. Changes made to metadata during a mapping will be reflected by this function.

### [](#parameters-14)Parameters

| Name | Type | Description |
| --- | --- | --- |
| key | string | An optional key of a metadata value to obtain. |

### [](#examples-27)Examples

```bloblang
root.topic = root_meta("kafka_topic")
```

The key parameter is optional and if omitted the entire metadata contents are returned as an object:

```bloblang
root.all_metadata = root_meta()
```

## [](#snowflake_id)snowflake_id

Generates a unique, time-ordered Snowflake ID. Snowflake IDs are 64-bit integers that encode timestamp, node ID, and sequence information, making them ideal for distributed systems where sortable unique identifiers are needed. Returns a string representation of the ID.

### [](#parameters-15)Parameters

| Name | Type | Description |
| --- | --- | --- |
| node_id | integer | Optional node identifier (0-1023) to distinguish IDs generated by different machines in a distributed system. Defaults to 1. |

### [](#examples-28)Examples

Generate a unique Snowflake ID for each message:

```bloblang
root.id = snowflake_id()
root.payload = this
```

Generate Snowflake IDs with different node IDs for multi-datacenter deployments:

```bloblang
root.id = snowflake_id(42)
root.data = this
```

## [](#throw)throw

Immediately fails the mapping with a custom error message. Use this to halt processing when data validation fails or required fields are missing, causing the message to be routed to error handlers.

### [](#parameters-16)Parameters

| Name | Type | Description |
| --- | --- | --- |
| why | string | A string explanation for why an error was thrown, this will be added to the resulting error message. |

### [](#examples-29)Examples

```bloblang
root.doc.type = match {
  this.exists("header.id") => "foo"
  this.exists("body.data") => "bar"
  _ => throw("unknown type")
}
root.doc.contents = (this.body.content | this.thing.body)

# In:  {"header":{"id":"first"},"thing":{"body":"hello world"}}
# Out: {"doc":{"contents":"hello world","type":"foo"}}

# In:  {"nothing":"matches"}
# Out: Error("failed assignment (line 1): unknown type")
```

Validate required fields before processing:

```bloblang
root = if this.exists("user_id") {
  this
} else {
  throw("missing required field: user_id")
}

# In:  {"user_id":123,"name":"alice"}
# Out: {"name":"alice","user_id":123}

# In:  {"name":"bob"}
# Out: Error("failed assignment (line 1): missing required field: user_id")
```

## [](#timestamp_unix)timestamp_unix

Returns the current Unix timestamp in seconds since epoch. Use this for numeric timestamps compatible with most systems, or as a seed for random number generation.

### [](#examples-30)Examples

```bloblang
root.received_at = timestamp_unix()
```

Create a sortable ID combining timestamp with a counter:

```bloblang
root.id = "%v-%v".format(timestamp_unix(), batch_index())
```

## [](#timestamp_unix_micro)timestamp_unix_micro

Returns the current Unix timestamp in microseconds since epoch. Use this for high-precision timing measurements or when microsecond resolution is required.

### [](#examples-31)Examples

```bloblang
root.received_at = timestamp_unix_micro()
```

Measure elapsed time between events:

```bloblang
root.processing_duration_us = timestamp_unix_micro() - this.start_time_us
```

## [](#timestamp_unix_milli)timestamp_unix_milli

Returns the current Unix timestamp in milliseconds since epoch. Use this for millisecond-precision timestamps common in web APIs and JavaScript systems.

### [](#examples-32)Examples

```bloblang
root.received_at = timestamp_unix_milli()
```

Add processing time metadata:

```bloblang
meta processing_time_ms = timestamp_unix_milli()
```

## [](#timestamp_unix_nano)timestamp_unix_nano

Returns the current Unix timestamp in nanoseconds since epoch. Use this for the highest precision timing or as a unique seed value that changes on every invocation.

### [](#examples-33)Examples

```bloblang
root.received_at = timestamp_unix_nano()
```

Generate unique random values on each mapping:

```bloblang
root.random_value = random_int(timestamp_unix_nano())
```

## [](#tracing_id)tracing_id

Returns the OpenTelemetry trace ID for the message, or an empty string if no tracing span exists. Use this to correlate logs and events with distributed traces.

### [](#examples-34)Examples

```bloblang
meta trace_id = tracing_id()
```

Add trace ID to structured logs:

```bloblang
root.log_entry = this
root.log_entry.trace_id = tracing_id()
```

## [](#tracing_span)tracing_span

Returns the OpenTelemetry tracing span attached to the message as a text map object, or `null` if no span exists. Use this to propagate trace context to downstream systems via headers or metadata.

### [](#examples-35)Examples

```bloblang
root.headers.traceparent = tracing_span().traceparent

# In:  {"some_stuff":"just can't be explained by science"}
# Out: {"headers":{"traceparent":"00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"}}
```

Forward all tracing fields to output metadata:

```bloblang
meta = tracing_span()
```

## [](#ulid)ulid

Generates a Universally Unique Lexicographically Sortable Identifier (ULID). ULIDs are 128-bit identifiers that are sortable by creation time, URL-safe, and case-insensitive. They consist of a 48-bit timestamp (millisecond precision) and 80 bits of randomness, making them ideal for distributed systems that need time-ordered unique IDs without coordination.

### [](#parameters-17)Parameters

| Name | Type | Description |
| --- | --- | --- |
| encoding | string | Encoding format for the ULID. "crockford" produces 26-character Base32 strings (recommended). "hex" produces 32-character hexadecimal strings. |
| random_source | string | Randomness source: "secure_random" uses cryptographically secure random (recommended for production), "fast_random" uses faster but non-secure random (only for non-sensitive testing). |

### [](#examples-36)Examples

Generate time-sortable IDs for distributed message ordering:

```bloblang
root.message_id = ulid()
root.timestamp = now()
root.data = this
```

Generate hex-encoded ULIDs for systems that prefer hexadecimal format:

```bloblang
root.id = ulid("hex")
```

## [](#uuid_v4)uuid_v4

Generates a random RFC-4122 version 4 UUID. Use this for creating unique identifiers that don’t reveal timing information or require ordering. Each invocation produces a new globally unique ID.

### [](#examples-37)Examples

```bloblang
root.id = uuid_v4()
```

Add unique request IDs for tracing:

```bloblang
root = this
root.request_id = uuid_v4()
```

## [](#uuid_v7)uuid_v7

Generates a time-ordered UUID version 7 with millisecond timestamp precision. Use this for sortable unique identifiers that maintain chronological ordering, ideal for database keys or event IDs. Optionally specify a custom timestamp.

### [](#parameters-18)Parameters

| Name | Type | Description |
| --- | --- | --- |
| time (optional) | timestamp | An optional timestamp to use for the time ordered portion of the UUID. |

### [](#examples-38)Examples

```bloblang
root.id = uuid_v7()
```

Generate a UUID with a specific timestamp for backdating events:

```bloblang
root.id = uuid_v7(now().ts_sub_iso8601("PT1M"))
```

## [](#var)var

### [](#parameters-19)Parameters

| Name | Type | Description |
| --- | --- | --- |
| name | string | The name of the target variable. |

## [](#with_schema_registry_header)with_schema_registry_header

Prepends a Confluent Schema Registry wire format header to message bytes. The header is 5 bytes: a magic byte (0x00) followed by a 4-byte big-endian schema ID. This format is required when producing messages to Kafka topics that use Confluent Schema Registry for schema validation and evolution.

### [](#parameters-20)Parameters

| Name | Type | Description |
| --- | --- | --- |
| schema_id | unknown | The schema ID from your Schema Registry (0 to 4294967295). This ID references the schema version used to encode the message. |
| message | unknown | The serialized message bytes (e.g., Avro, Protobuf, or JSON Schema encoded data) to prepend the header to. |

### [](#examples-39)Examples

Add Schema Registry header to Avro-encoded message:

```bloblang
root = with_schema_registry_header(123, content())
```

Use schema ID from metadata to add header dynamically:

```bloblang
root = with_schema_registry_header(meta("schema_id").number(), content())
```
