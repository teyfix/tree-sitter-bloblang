# Bloblang Methods

> For the complete documentation index, see [llms.txt](https://docs.redpanda.com/llms.txt). Component-specific: [redpanda-connect-full.txt](https://docs.redpanda.com/redpanda-connect-full.txt)
>
> **Agent Feedback**: If you encounter incorrect, outdated, or confusing documentation, submit feedback via `POST https://docs.redpanda.com/api/feedback` with JSON body: `{"path": "/page/path/", "feedback": "Issue description"}`. Only submit when you have specific, actionable feedback.

---
title: Bloblang Methods
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
docname: bloblang/methods
page-component-name: redpanda-connect
page-version: master
page-component-version: master
page-component-title: Connect
page-relative-src-path: bloblang/methods.adoc
page-edit-url: https://github.com/redpanda-data/rp-connect-docs/edit/main/modules/guides/pages/bloblang/methods.adoc
description: A list of Bloblang methods
page-git-created-date: "2024-05-24"
page-git-modified-date: "2026-04-02"
---

<!-- Source: https://docs.redpanda.com/redpanda-connect/guides/bloblang/methods.md -->

Methods provide most of the power in Bloblang as they allow you to augment values and can be added to any expression (including other methods):

```bloblang
root.doc.id = this.thing.id.string().catch(uuid_v4())
root.doc.reduced_nums = this.thing.nums.map_each(num -> if num < 10 {
  deleted()
} else {
  num - 10
})
root.has_good_taste = ["pikachu","mewtwo","magmar"].contains(this.user.fav_pokemon)

# In:  {"thing":{"id":123,"nums":[5,12,18,7,25]},"user":{"fav_pokemon":"pikachu"}}
```

Methods support both named and nameless style arguments:

```bloblang
root.foo_one = this.(bar | baz).trim().replace_all(old: "dog", new: "cat")
root.foo_two = this.(bar | baz).trim().replace_all("dog", "cat")

# In:  {"bar":"  I love my dog  "}
```

## [](#general)General

### [](#apply)apply

Apply a declared mapping to a target value.

#### [](#parameters)Parameters

| Name | Type | Description |
| --- | --- | --- |
| mapping | string | The mapping to apply. |

#### [](#examples)Examples

```bloblang
map thing {
  root.inner = this.first
}

root.foo = this.doc.apply("thing")

# In:  {"doc":{"first":"hello world"}}
# Out: {"foo":{"inner":"hello world"}}
```

```bloblang
map create_foo {
  root.name = "a foo"
  root.purpose = "to be a foo"
}

root = this
root.foo = null.apply("create_foo")

# In:  {"id":"1234"}
# Out: {"foo":{"name":"a foo","purpose":"to be a foo"},"id":"1234"}
```

### [](#catch)catch

If the result of a target query fails (due to incorrect types, failed parsing, etc) the argument is returned instead.

#### [](#parameters-2)Parameters

| Name | Type | Description |
| --- | --- | --- |
| fallback | query expression | A value to yield, or query to execute, if the target query fails. |

#### [](#examples-2)Examples

```bloblang
root.doc.id = this.thing.id.string().catch(uuid_v4())
```

The fallback argument can be a mapping, allowing you to capture the error string and yield structured data back:

```bloblang
root.url = this.url.parse_url().catch(err -> {"error":err,"input":this.url})

# In:  {"url":"invalid %&# url"}
# Out: {"url":{"error":"field `this.url`: parse \"invalid %&\": invalid URL escape \"%&\"","input":"invalid %&# url"}}
```

When the input document is not structured attempting to reference structured fields with `this` will result in an error. Therefore, a convenient way to delete non-structured data is with a catch:

```bloblang
root = this.catch(deleted())

# In:  {"doc":{"foo":"bar"}}
# Out: {"doc":{"foo":"bar"}}

# In:  not structured data
# Out: <Message deleted>
```

### [](#from)from

Modifies a target query such that certain functions are executed from the perspective of another message in the batch. This allows you to mutate events based on the contents of other messages. Functions that support this behavior are `content`, `json` and `meta`.

#### [](#parameters-3)Parameters

| Name | Type | Description |
| --- | --- | --- |
| index | integer | The message index to use as a perspective. |

#### [](#examples-3)Examples

For example, the following map extracts the contents of the JSON field `foo` specifically from message index `1` of a batch, effectively overriding the field `foo` for all messages of a batch to that of message 1:

```bloblang
root = this
root.foo = json("foo").from(1)
```

### [](#from_all)from_all

Modifies a target query such that certain functions are executed from the perspective of each message in the batch, and returns the set of results as an array. Functions that support this behavior are `content`, `json` and `meta`.

#### [](#examples-4)Examples

```bloblang
root = this
root.foo_summed = json("foo").from_all().sum()
```

### [](#map)map

Executes a query on the target value, allowing you to transform or extract data from the current context.

#### [](#parameters-4)Parameters

| Name | Type | Description |
| --- | --- | --- |
| query | query expression | A query to execute on the target. |

### [](#not)not

Returns the logical NOT (negation) of a boolean value. Converts true to false and false to true.

### [](#or)or

If the result of the target query fails or resolves to `null`, returns the argument instead. This is an explicit method alternative to the coalesce pipe operator `|`.

#### [](#parameters-5)Parameters

| Name | Type | Description |
| --- | --- | --- |
| fallback | query expression | A value to yield, or query to execute, if the target query fails or resolves to null. |

#### [](#examples-5)Examples

```bloblang
root.doc.id = this.thing.id.or(uuid_v4())
```

## [](#encoding-and-encryption)Encoding and encryption

### [](#compress)compress

Compresses a string or byte array using the specified compression algorithm. Returns compressed data as bytes. Useful for reducing payload size before transmission or storage.

#### [](#parameters-6)Parameters

| Name | Type | Description |
| --- | --- | --- |
| algorithm | string | The compression algorithm: flate, gzip, pgzip (parallel gzip), lz4, snappy, zlib, or zstd. |
| level | integer | Compression level (default: -1 for default compression). Higher values increase compression ratio but use more CPU. Range and effect varies by algorithm. |

#### [](#examples-6)Examples

Compress and encode for safe transmission:

```bloblang
root.compressed = content().bytes().compress("gzip").encode("base64")

# In:  {"message":"hello world I love space"}
# Out: {"compressed":"H4sIAAAJbogA/wAmANn/eyJtZXNzYWdlIjoiaGVsbG8gd29ybGQgSSBsb3ZlIHNwYWNlIn0DAHEvdwomAAAA"}
```

Compare compression ratios across algorithms:

```bloblang
root.original_size = content().length()
root.gzip_size = content().compress("gzip").length()
root.lz4_size = content().compress("lz4").length()

# In:  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
# Out: {"gzip_size":114,"lz4_size":85,"original_size":89}
```

### [](#decode)decode

Decodes an encoded string according to a chosen scheme.

#### [](#parameters-7)Parameters

| Name | Type | Description |
| --- | --- | --- |
| scheme | string | The decoding scheme to use. |

#### [](#examples-7)Examples

```bloblang
root.decoded = this.value.decode("hex").string()

# In:  {"value":"68656c6c6f20776f726c64"}
# Out: {"decoded":"hello world"}
```

```bloblang
root = this.encoded.decode("ascii85")

# In:  {"encoded":"FD,B0+DGm>FDl80Ci\"A>F`)8BEckl6F`M&(+Cno&@/"}
# Out: this is totally unstructured data
```

### [](#decompress)decompress

Decompresses a byte array using the specified decompression algorithm. Returns decompressed data as bytes. Use with data that was previously compressed using the corresponding algorithm.

#### [](#parameters-8)Parameters

| Name | Type | Description |
| --- | --- | --- |
| algorithm | string | The decompression algorithm: gzip, pgzip (parallel gzip), zlib, bzip2, flate, snappy, lz4, or zstd. |

#### [](#examples-8)Examples

Decompress base64-encoded compressed data:

```bloblang
root = this.compressed.decode("base64").decompress("gzip")

# In:  {"compressed":"H4sIAN12MWkAA8tIzcnJVyjPL8pJUfBUyMkvS1UoLkhMTgUAQpDxbxgAAAA="}
# Out: hello world I love space
```

Convert decompressed bytes to string for JSON output:

```bloblang
root.message = this.compressed.decode("base64").decompress("gzip").string()

# In:  {"compressed":"H4sIAN12MWkAA8tIzcnJVyjPL8pJUfBUyMkvS1UoLkhMTgUAQpDxbxgAAAA="}
# Out: {"message":"hello world I love space"}
```

### [](#decrypt_aes)decrypt_aes

Decrypts an AES-encrypted string or byte array.

#### [](#parameters-9)Parameters

| Name | Type | Description |
| --- | --- | --- |
| scheme | string | The scheme to use for decryption, one of ctr, gcm, ofb, cbc. |
| key | string | A key to decrypt with. |
| iv | string | An initialization vector / nonce. |

#### [](#examples-9)Examples

```bloblang
let key = "2b7e151628aed2a6abf7158809cf4f3c".decode("hex")
let vector = "f0f1f2f3f4f5f6f7f8f9fafbfcfdfeff".decode("hex")
root.decrypted = this.value.decode("hex").decrypt_aes("ctr", $key, $vector).string()

# In:  {"value":"84e9b31ff7400bdf80be7254"}
# Out: {"decrypted":"hello world!"}
```

### [](#encode)encode

Encodes a string or byte array according to a chosen scheme.

#### [](#parameters-10)Parameters

| Name | Type | Description |
| --- | --- | --- |
| scheme | string | The encoding scheme to use. |

#### [](#examples-10)Examples

```bloblang
root.encoded = this.value.encode("hex")

# In:  {"value":"hello world"}
# Out: {"encoded":"68656c6c6f20776f726c64"}
```

```bloblang
root.encoded = content().encode("ascii85")

# In:  this is totally unstructured data
# Out: {"encoded":"FD,B0+DGm>FDl80Ci\"A>F`)8BEckl6F`M&(+Cno&@/"}
```

### [](#encrypt_aes)encrypt_aes

Encrypts a string or byte array using AES encryption.

#### [](#parameters-11)Parameters

| Name | Type | Description |
| --- | --- | --- |
| scheme | string | The scheme to use for encryption, one of ctr, gcm, ofb, cbc. |
| key | string | A key to encrypt with. |
| iv | string | An initialization vector / nonce. |

#### [](#examples-11)Examples

```bloblang
let key = "2b7e151628aed2a6abf7158809cf4f3c".decode("hex")
let vector = "f0f1f2f3f4f5f6f7f8f9fafbfcfdfeff".decode("hex")
root.encrypted = this.value.encrypt_aes("ctr", $key, $vector).encode("hex")

# In:  {"value":"hello world!"}
# Out: {"encrypted":"84e9b31ff7400bdf80be7254"}
```

### [](#hash)hash

Hashes a string or byte array using a specified algorithm.

#### [](#parameters-12)Parameters

| Name | Type | Description |
| --- | --- | --- |
| algorithm | string | The hashing algorithm to use. |
| key (optional) | string | An optional key to use. |
| polynomial | string | An optional polynomial key to use when selecting the crc32 algorithm, otherwise ignored. Options are IEEE (default), Castagnoli and Koopman |

#### [](#examples-12)Examples

```bloblang
root.h1 = this.value.hash("sha1").encode("hex")
root.h2 = this.value.hash("hmac_sha1","static-key").encode("hex")

# In:  {"value":"hello world"}
# Out: {"h1":"2aae6c35c94fcfb415dbe95f408b9ce91ee846ed","h2":"d87e5f068fa08fe90bb95bc7c8344cb809179d76"}
```

The `crc32` algorithm supports options for the polynomial:

```bloblang
root.h1 = this.value.hash(algorithm: "crc32", polynomial: "Castagnoli").encode("hex")
root.h2 = this.value.hash(algorithm: "crc32", polynomial: "Koopman").encode("hex")

# In:  {"value":"hello world"}
# Out: {"h1":"c99465aa","h2":"df373d3c"}
```

### [](#uuid_v5)uuid_v5

Generates a version 5 UUID from a namespace and name.

#### [](#parameters-13)Parameters

| Name | Type | Description |
| --- | --- | --- |
| ns (optional) | string | An optional namespace name or UUID. It supports the dns, url, oid and x500 predefined namespaces and any valid RFC-9562 UUID. If empty, the nil UUID will be used. |

#### [](#examples-13)Examples

```bloblang
root.id = "example".uuid_v5()
```

```bloblang
root.id = "example".uuid_v5("x500")
```

```bloblang
root.id = "example".uuid_v5("77f836b7-9f61-46c0-851e-9b6ca3535e69")
```

## [](#geoip)GeoIP

### [](#geoip_anonymous_ip)geoip_anonymous_ip

Looks up an IP address against a [MaxMind database file](https://www.maxmind.com/en/home) and, if found, returns an object describing the anonymous IP associated with it.

#### [](#parameters-14)Parameters

| Name | Type | Description |
| --- | --- | --- |
| path | string | A path to an mmdb (maxmind) file. |

### [](#geoip_asn)geoip_asn

Looks up an IP address against a [MaxMind database file](https://www.maxmind.com/en/home) and, if found, returns an object describing the ASN associated with it.

#### [](#parameters-15)Parameters

| Name | Type | Description |
| --- | --- | --- |
| path | string | A path to an mmdb (maxmind) file. |

### [](#geoip_city)geoip_city

Looks up an IP address against a [MaxMind database file](https://www.maxmind.com/en/home) and, if found, returns an object describing the city associated with it.

#### [](#parameters-16)Parameters

| Name | Type | Description |
| --- | --- | --- |
| path | string | A path to an mmdb (maxmind) file. |

### [](#geoip_connection_type)geoip_connection_type

Looks up an IP address against a [MaxMind database file](https://www.maxmind.com/en/home) and, if found, returns an object describing the connection type associated with it.

#### [](#parameters-17)Parameters

| Name | Type | Description |
| --- | --- | --- |
| path | string | A path to an mmdb (maxmind) file. |

### [](#geoip_country)geoip_country

Looks up an IP address against a [MaxMind database file](https://www.maxmind.com/en/home) and, if found, returns an object describing the country associated with it.

#### [](#parameters-18)Parameters

| Name | Type | Description |
| --- | --- | --- |
| path | string | A path to an mmdb (maxmind) file. |

### [](#geoip_domain)geoip_domain

Looks up an IP address against a [MaxMind database file](https://www.maxmind.com/en/home) and, if found, returns an object describing the domain associated with it.

#### [](#parameters-19)Parameters

| Name | Type | Description |
| --- | --- | --- |
| path | string | A path to an mmdb (maxmind) file. |

### [](#geoip_enterprise)geoip_enterprise

Looks up an IP address against a [MaxMind database file](https://www.maxmind.com/en/home) and, if found, returns an object describing the enterprise associated with it.

#### [](#parameters-20)Parameters

| Name | Type | Description |
| --- | --- | --- |
| path | string | A path to an mmdb (maxmind) file. |

### [](#geoip_isp)geoip_isp

Looks up an IP address against a [MaxMind database file](https://www.maxmind.com/en/home) and, if found, returns an object describing the ISP associated with it.

#### [](#parameters-21)Parameters

| Name | Type | Description |
| --- | --- | --- |
| path | string | A path to an mmdb (maxmind) file. |

## [](#json-web-tokens)JSON web tokens

### [](#parse_jwt_es256)parse_jwt_es256

Parses a claims object from a JWT string encoded with ES256. This method does not validate JWT claims.

#### [](#parameters-22)Parameters

| Name | Type | Description |
| --- | --- | --- |
| signing_secret | string | The ES256 secret that was used for signing the token. |

#### [](#examples-14)Examples

```bloblang
root.claims = this.signed.parse_jwt_es256("""-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEGtLqIBePHmIhQcf0JLgc+F/4W/oI
dp0Gta53G35VerNDgUUXmp78J2kfh4qLdh0XtmOMI587tCaqjvDAXfs//w==
-----END PUBLIC KEY-----""")

# In:  {"signed":"eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTYyMzkwMjIsIm1vb2QiOiJEaXNkYWluZnVsIiwic3ViIjoiMTIzNDU2Nzg5MCJ9.GIRajP9JJbpTlqSCdNEz4qpQkRvzX4Q51YnTwVyxLDM9tKjR_a8ggHWn9CWj7KG0x8J56OWtmUxn112SRTZVhQ"}
# Out: {"claims":{"iat":1516239022,"mood":"Disdainful","sub":"1234567890"}}
```

### [](#parse_jwt_es384)parse_jwt_es384

Parses a claims object from a JWT string encoded with ES384. This method does not validate JWT claims.

#### [](#parameters-23)Parameters

| Name | Type | Description |
| --- | --- | --- |
| signing_secret | string | The ES384 secret that was used for signing the token. |

#### [](#examples-15)Examples

```bloblang
root.claims = this.signed.parse_jwt_es384("""-----BEGIN PUBLIC KEY-----
MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAERoz74/B6SwmLhs8X7CWhnrWyRrB13AuU
8OYeqy0qHRu9JWNw8NIavqpTmu6XPT4xcFanYjq8FbeuM11eq06C52mNmS4LLwzA
2imlFEgn85bvJoC3bnkuq4mQjwt9VxdH
-----END PUBLIC KEY-----""")

# In:  {"signed":"eyJhbGciOiJFUzM4NCIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTYyMzkwMjIsIm1vb2QiOiJEaXNkYWluZnVsIiwic3ViIjoiMTIzNDU2Nzg5MCJ9.H2HBSlrvQBaov2tdreGonbBexxtQB-xzaPL4-tNQZ6TVh7VH8VBcSwcWHYa1lBAHmdsKOFcB2Wk0SB7QWeGT3ptSgr-_EhDMaZ8bA5spgdpq5DsKfaKHrd7DbbQlmxNq"}
# Out: {"claims":{"iat":1516239022,"mood":"Disdainful","sub":"1234567890"}}
```

### [](#parse_jwt_es512)parse_jwt_es512

Parses a claims object from a JWT string encoded with ES512. This method does not validate JWT claims.

#### [](#parameters-24)Parameters

| Name | Type | Description |
| --- | --- | --- |
| signing_secret | string | The ES512 secret that was used for signing the token. |

#### [](#examples-16)Examples

```bloblang
root.claims = this.signed.parse_jwt_es512("""-----BEGIN PUBLIC KEY-----
MIGbMBAGByqGSM49AgEGBSuBBAAjA4GGAAQAkHLdts9P56fFkyhpYQ31M/Stwt3w
vpaxhlfudxnXgTO1IP4RQRgryRxZ19EUzhvWDcG3GQIckoNMY5PelsnCGnIBT2Xh
9NQkjWF5K6xS4upFsbGSAwQ+GIyyk5IPJ2LHgOyMSCVh5gRZXV3CZLzXujx/umC9
UeYyTt05zRRWuD+p5bY=
-----END PUBLIC KEY-----""")

# In:  {"signed":"eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTYyMzkwMjIsIm1vb2QiOiJEaXNkYWluZnVsIiwic3ViIjoiMTIzNDU2Nzg5MCJ9.ACrpLuU7TKpAnncDCpN9m85nkL55MJ45NFOBl6-nEXmNT1eIxWjiP4pwWVbFH9et_BgN14119jbL_KqEJInPYc9nAXC6dDLq0aBU-dalvNl4-O5YWpP43-Y-TBGAsWnbMTrchILJ4-AEiICe73Ck5yWPleKg9c3LtkEFWfGs7BoPRguZ"}
# Out: {"claims":{"iat":1516239022,"mood":"Disdainful","sub":"1234567890"}}
```

### [](#parse_jwt_hs256)parse_jwt_hs256

Parses a claims object from a JWT string encoded with HS256. This method does not validate JWT claims.

#### [](#parameters-25)Parameters

| Name | Type | Description |
| --- | --- | --- |
| signing_secret | string | The HS256 secret that was used for signing the token. |

#### [](#examples-17)Examples

```bloblang
root.claims = this.signed.parse_jwt_hs256("""dont-tell-anyone""")

# In:  {"signed":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTYyMzkwMjIsIm1vb2QiOiJEaXNkYWluZnVsIiwic3ViIjoiMTIzNDU2Nzg5MCJ9.YwXOM8v3gHVWcQRRRQc_zDlhmLnM62fwhFYGpiA0J1A"}
# Out: {"claims":{"iat":1516239022,"mood":"Disdainful","sub":"1234567890"}}
```

### [](#parse_jwt_hs384)parse_jwt_hs384

Parses a claims object from a JWT string encoded with HS384. This method does not validate JWT claims.

#### [](#parameters-26)Parameters

| Name | Type | Description |
| --- | --- | --- |
| signing_secret | string | The HS384 secret that was used for signing the token. |

#### [](#examples-18)Examples

```bloblang
root.claims = this.signed.parse_jwt_hs384("""dont-tell-anyone""")

# In:  {"signed":"eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTYyMzkwMjIsIm1vb2QiOiJEaXNkYWluZnVsIiwic3ViIjoiMTIzNDU2Nzg5MCJ9.2Y8rf_ijwN4t8hOGGViON_GrirLkCQVbCOuax6EoZ3nluX0tCGezcJxbctlIfsQ2"}
# Out: {"claims":{"iat":1516239022,"mood":"Disdainful","sub":"1234567890"}}
```

### [](#parse_jwt_hs512)parse_jwt_hs512

Parses a claims object from a JWT string encoded with HS512. This method does not validate JWT claims.

#### [](#parameters-27)Parameters

| Name | Type | Description |
| --- | --- | --- |
| signing_secret | string | The HS512 secret that was used for signing the token. |

#### [](#examples-19)Examples

```bloblang
root.claims = this.signed.parse_jwt_hs512("""dont-tell-anyone""")

# In:  {"signed":"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTYyMzkwMjIsIm1vb2QiOiJEaXNkYWluZnVsIiwic3ViIjoiMTIzNDU2Nzg5MCJ9.utRb0urG6LGGyranZJVo5Dk0Fns1QNcSUYPN0TObQ-YzsGGB8jrxHwM5NAJccjJZzKectEUqmmKCaETZvuX4Fg"}
# Out: {"claims":{"iat":1516239022,"mood":"Disdainful","sub":"1234567890"}}
```

### [](#parse_jwt_rs256)parse_jwt_rs256

Parses a claims object from a JWT string encoded with RS256. This method does not validate JWT claims.

#### [](#parameters-28)Parameters

| Name | Type | Description |
| --- | --- | --- |
| signing_secret | string | The RS256 secret that was used for signing the token. |

#### [](#examples-20)Examples

```bloblang
root.claims = this.signed.parse_jwt_rs256("""-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs/ibN8r68pLMR6gRzg4S
8v8l6Q7yi8qURjkEbcNeM1rkokC7xh0I4JVTwxYSVv/JIW8qJdyspl5NIfuAVi32
WfKvSAs+NIs+DMsNPYw3yuQals4AX8hith1YDvYpr8SD44jxhz/DR9lYKZFGhXGB
+7NqQ7vpTWp3BceLYocazWJgusZt7CgecIq57ycM5hjM93BvlrUJ8nQ1a46wfL/8
Cy4P0et70hzZrsjjN41KFhKY0iUwlyU41yEiDHvHDDsTMBxAZosWjSREGfJL6Mfp
XOInTHs/Gg6DZMkbxjQu6L06EdJ+Q/NwglJdAXM7Zo9rNELqRig6DdvG5JesdMsO
+QIDAQAB
-----END PUBLIC KEY-----""")

# In:  {"signed":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTYyMzkwMjIsIm1vb2QiOiJEaXNkYWluZnVsIiwic3ViIjoiMTIzNDU2Nzg5MCJ9.b0lH3jEupZZ4zoaly4Y_GCvu94HH6UKdKY96zfGNsIkPZpQLHIkZ7jMWlLlNOAd8qXlsBGP_i8H2qCKI4zlWJBGyPZgxXDzNRPVrTDfFpn4t4nBcA1WK2-ntXP3ehQxsaHcQU8Z_nsogId7Pme5iJRnoHWEnWtbwz5DLSXL3ZZNnRdrHM9MdI7QSDz9mojKDCaMpGN9sG7Xl-tGdBp1XzXuUOzG8S03mtZ1IgVR1uiBL2N6oohHIAunk8DIAmNWI-zgycTgzUGU7mvPkKH43qO8Ua1-13tCUBKKa8VxcotZ67Mxm1QAvBGoDnTKwWMwghLzs6d6WViXQg6eWlJcpBA"}
# Out: {"claims":{"iat":1516239022,"mood":"Disdainful","sub":"1234567890"}}
```

### [](#parse_jwt_rs384)parse_jwt_rs384

Parses a claims object from a JWT string encoded with RS384. This method does not validate JWT claims.

#### [](#parameters-29)Parameters

| Name | Type | Description |
| --- | --- | --- |
| signing_secret | string | The RS384 secret that was used for signing the token. |

#### [](#examples-21)Examples

```bloblang
root.claims = this.signed.parse_jwt_rs384("""-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs/ibN8r68pLMR6gRzg4S
8v8l6Q7yi8qURjkEbcNeM1rkokC7xh0I4JVTwxYSVv/JIW8qJdyspl5NIfuAVi32
WfKvSAs+NIs+DMsNPYw3yuQals4AX8hith1YDvYpr8SD44jxhz/DR9lYKZFGhXGB
+7NqQ7vpTWp3BceLYocazWJgusZt7CgecIq57ycM5hjM93BvlrUJ8nQ1a46wfL/8
Cy4P0et70hzZrsjjN41KFhKY0iUwlyU41yEiDHvHDDsTMBxAZosWjSREGfJL6Mfp
XOInTHs/Gg6DZMkbxjQu6L06EdJ+Q/NwglJdAXM7Zo9rNELqRig6DdvG5JesdMsO
+QIDAQAB
-----END PUBLIC KEY-----""")

# In:  {"signed":"eyJhbGciOiJSUzM4NCIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTYyMzkwMjIsIm1vb2QiOiJEaXNkYWluZnVsIiwic3ViIjoiMTIzNDU2Nzg5MCJ9.orcXYBcjVE5DU7mvq4KKWFfNdXR4nEY_xupzWoETRpYmQZIozlZnM_nHxEk2dySvpXlAzVm7kgOPK2RFtGlOVaNRIa3x-pMMr-bhZTno4L8Hl4sYxOks3bWtjK7wql4uqUbqThSJB12psAXw2-S-I_FMngOPGIn4jDT9b802ottJSvTpXcy0-eKTjrV2PSkRRu-EYJh0CJZW55MNhqlt6kCGhAXfbhNazN3ASX-dmpd_JixyBKphrngr_zRA-FCn_Xf3QQDA-5INopb4Yp5QiJ7UxVqQEKI80X_JvJqz9WE1qiAw8pq5-xTen1t7zTP-HT1NbbD3kltcNa3G8acmNg"}
# Out: {"claims":{"iat":1516239022,"mood":"Disdainful","sub":"1234567890"}}
```

### [](#parse_jwt_rs512)parse_jwt_rs512

Parses a claims object from a JWT string encoded with RS512. This method does not validate JWT claims.

#### [](#parameters-30)Parameters

| Name | Type | Description |
| --- | --- | --- |
| signing_secret | string | The RS512 secret that was used for signing the token. |

#### [](#examples-22)Examples

```bloblang
root.claims = this.signed.parse_jwt_rs512("""-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs/ibN8r68pLMR6gRzg4S
8v8l6Q7yi8qURjkEbcNeM1rkokC7xh0I4JVTwxYSVv/JIW8qJdyspl5NIfuAVi32
WfKvSAs+NIs+DMsNPYw3yuQals4AX8hith1YDvYpr8SD44jxhz/DR9lYKZFGhXGB
+7NqQ7vpTWp3BceLYocazWJgusZt7CgecIq57ycM5hjM93BvlrUJ8nQ1a46wfL/8
Cy4P0et70hzZrsjjN41KFhKY0iUwlyU41yEiDHvHDDsTMBxAZosWjSREGfJL6Mfp
XOInTHs/Gg6DZMkbxjQu6L06EdJ+Q/NwglJdAXM7Zo9rNELqRig6DdvG5JesdMsO
+QIDAQAB
-----END PUBLIC KEY-----""")

# In:  {"signed":"eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTYyMzkwMjIsIm1vb2QiOiJEaXNkYWluZnVsIiwic3ViIjoiMTIzNDU2Nzg5MCJ9.rsMp_X5HMrUqKnZJIxo27aAoscovRA6SSQYR9rq7pifIj0YHXxMyNyOBDGnvVALHKTi25VUGHpfNUW0VVMmae0A4t_ObNU6hVZHguWvetKZZq4FZpW1lgWHCMqgPGwT5_uOqwYCH6r8tJuZT3pqXeL0CY4putb1AN2w6CVp620nh3l8d3XWb4jaifycd_4CEVCqHuWDmohfug4VhmoVKlIXZkYoAQowgHlozATDssBSWdYtv107Wd2AzEoiXPu6e3pflsuXULlyqQnS4ELEKPYThFLafh1NqvZDPddqozcPZ-iODBW-xf3A4DYDdivnMYLrh73AZOGHexxu8ay6nDA"}
# Out: {"claims":{"iat":1516239022,"mood":"Disdainful","sub":"1234567890"}}
```

### [](#sign_jwt_es256)sign_jwt_es256

Hash and sign an object representing JSON Web Token (JWT) claims using ES256.

#### [](#parameters-31)Parameters

| Name | Type | Description |
| --- | --- | --- |
| signing_secret | string | The secret to use for signing the token. |
| headers (optional) | unknown | Optional object of JWT header fields to include in the token. Keys "alg", "typ", "jku", "jwk", "x5u", "x5c", "x5t","x5t#S256" and "crit" will be ignored if provided. |

#### [](#examples-23)Examples

```bloblang
root.signed = this.claims.sign_jwt_es256("""-----BEGIN EC PRIVATE KEY-----
... signature data ...
-----END EC PRIVATE KEY-----""")

# In:  {"claims":{"sub":"user123"}}
# Out: {"signed":"eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTYyMzkwMjIsIm1vb2QiOiJEaXNkYWluZnVsIiwic3ViIjoiMTIzNDU2Nzg5MCJ9.-8LrOdkEiv_44ADWW08lpbq41ZmHCel58NMORPq1q4Dyw0zFhqDVLrRoSvCvuyyvgXAFb9IHfR-9MlJ_2ShA9A"}
```

```bloblang
root.signed = this.claims.sign_jwt_es256(signing_secret: """-----BEGIN EC PRIVATE KEY-----
... signature data ...
-----END EC PRIVATE KEY-----""", headers: {"kid": "my-key", "x": "y"})

# In:  {"claims":{"sub":"user123"}}
# Out: {"signed":"<signed JWT token>"}
```

### [](#sign_jwt_es384)sign_jwt_es384

Hash and sign an object representing JSON Web Token (JWT) claims using ES384.

#### [](#parameters-32)Parameters

| Name | Type | Description |
| --- | --- | --- |
| signing_secret | string | The secret to use for signing the token. |
| headers (optional) | unknown | Optional object of JWT header fields to include in the token. Keys "alg", "typ", "jku", "jwk", "x5u", "x5c", "x5t","x5t#S256" and "crit" will be ignored if provided. |

#### [](#examples-24)Examples

```bloblang
root.signed = this.claims.sign_jwt_es384("""-----BEGIN EC PRIVATE KEY-----
... signature data ...
-----END EC PRIVATE KEY-----""")

# In:  {"claims":{"sub":"user123"}}
# Out: {"signed":"eyJhbGciOiJFUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMTIzIn0.8FmTKH08dl7dyxrNu0rmvhegiIBCy-O9cddGco2e9lpZtgv5mS5qHgPkgBC5eRw1d7SRJsHwHZeehzdqT5Ba7aZJIhz9ds0sn37YQ60L7jT0j2gxCzccrt4kECHnUnLw"}
```

```bloblang
root.signed = this.claims.sign_jwt_es384(signing_secret: """-----BEGIN EC PRIVATE KEY-----
... signature data ...
-----END EC PRIVATE KEY-----""", headers: {"kid": "my-key", "x": "y"})

# In:  {"claims":{"sub":"user123"}}
# Out: {"signed":"<signed JWT token>"}
```

### [](#sign_jwt_es512)sign_jwt_es512

Hash and sign an object representing JSON Web Token (JWT) claims using ES512.

#### [](#parameters-33)Parameters

| Name | Type | Description |
| --- | --- | --- |
| signing_secret | string | The secret to use for signing the token. |
| headers (optional) | unknown | Optional object of JWT header fields to include in the token. Keys "alg", "typ", "jku", "jwk", "x5u", "x5c", "x5t","x5t#S256" and "crit" will be ignored if provided. |

#### [](#examples-25)Examples

```bloblang
root.signed = this.claims.sign_jwt_es512("""-----BEGIN EC PRIVATE KEY-----
... signature data ...
-----END EC PRIVATE KEY-----""")

# In:  {"claims":{"sub":"user123"}}
# Out: {"signed":"eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMTIzIn0.AQbEWymoRZxDJEJtKSFFG2k2VbDCTYSuBwAZyMqexCspr3If8aERTVGif8HXG3S7TzMBCCzxkcKr3eIU441l3DlpAMNfQbkcOlBqMvNBn-CX481WyKf3K5rFHQ-6wRonz05aIsWAxCDvAozI_9J0OWllxdQ2MBAuTPbPJ38OqXsYkCQs"}
```

```bloblang
root.signed = this.claims.sign_jwt_es512(signing_secret: """-----BEGIN EC PRIVATE KEY-----
... signature data ...
-----END EC PRIVATE KEY-----""", headers: {"kid": "my-key", "x": "y"})

# In:  {"claims":{"sub":"user123"}}
# Out: {"signed":"<signed JWT token>"}
```

### [](#sign_jwt_hs256)sign_jwt_hs256

Hash and sign an object representing JSON Web Token (JWT) claims using HS256.

#### [](#parameters-34)Parameters

| Name | Type | Description |
| --- | --- | --- |
| signing_secret | string | The secret to use for signing the token. |
| headers (optional) | unknown | Optional object of JWT header fields to include in the token. Keys "alg", "typ", "jku", "jwk", "x5u", "x5c", "x5t","x5t#S256" and "crit" will be ignored if provided. |

#### [](#examples-26)Examples

```bloblang
root.signed = this.claims.sign_jwt_hs256("""dont-tell-anyone""")

# In:  {"claims":{"sub":"user123"}}
# Out: {"signed":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMTIzIn0.hUl-nngPMY_3h9vveWJUPsCcO5PeL6k9hWLnMYeFbFQ"}
```

```bloblang
root.signed = this.claims.sign_jwt_hs256(signing_secret: """dont-tell-anyone""", headers: {"kid": "my-key", "x": "y"})

# In:  {"claims":{"sub":"user123"}}
# Out: {"signed":"<signed JWT token>"}
```

### [](#sign_jwt_hs384)sign_jwt_hs384

Hash and sign an object representing JSON Web Token (JWT) claims using HS384.

#### [](#parameters-35)Parameters

| Name | Type | Description |
| --- | --- | --- |
| signing_secret | string | The secret to use for signing the token. |
| headers (optional) | unknown | Optional object of JWT header fields to include in the token. Keys "alg", "typ", "jku", "jwk", "x5u", "x5c", "x5t","x5t#S256" and "crit" will be ignored if provided. |

#### [](#examples-27)Examples

```bloblang
root.signed = this.claims.sign_jwt_hs384("""dont-tell-anyone""")

# In:  {"claims":{"sub":"user123"}}
# Out: {"signed":"eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMTIzIn0.zGYLr83aToon1efUNq-hw7XgT20lPvZb8sYei8x6S6mpHwb433SJdXJXx0Oio8AZ"}
```

```bloblang
root.signed = this.claims.sign_jwt_hs384(signing_secret: """dont-tell-anyone""", headers: {"kid": "my-key", "x": "y"})

# In:  {"claims":{"sub":"user123"}}
# Out: {"signed":"<signed JWT token>"}
```

### [](#sign_jwt_hs512)sign_jwt_hs512

Hash and sign an object representing JSON Web Token (JWT) claims using HS512.

#### [](#parameters-36)Parameters

| Name | Type | Description |
| --- | --- | --- |
| signing_secret | string | The secret to use for signing the token. |
| headers (optional) | unknown | Optional object of JWT header fields to include in the token. Keys "alg", "typ", "jku", "jwk", "x5u", "x5c", "x5t","x5t#S256" and "crit" will be ignored if provided. |

#### [](#examples-28)Examples

```bloblang
root.signed = this.claims.sign_jwt_hs512("""dont-tell-anyone""")

# In:  {"claims":{"sub":"user123"}}
# Out: {"signed":"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMTIzIn0.zBNR9o_6EDwXXKkpKLNJhG26j8Dc-mV-YahBwmEdCrmiWt5les8I9rgmNlWIowpq6Yxs4kLNAdFhqoRz3NXT3w"}
```

```bloblang
root.signed = this.claims.sign_jwt_hs512(signing_secret: """dont-tell-anyone""", headers: {"kid": "my-key", "x": "y"})

# In:  {"claims":{"sub":"user123"}}
# Out: {"signed":"<signed JWT token>"}
```

### [](#sign_jwt_rs256)sign_jwt_rs256

Hash and sign an object representing JSON Web Token (JWT) claims using RS256.

#### [](#parameters-37)Parameters

| Name | Type | Description |
| --- | --- | --- |
| signing_secret | string | The secret to use for signing the token. |
| headers (optional) | unknown | Optional object of JWT header fields to include in the token. Keys "alg", "typ", "jku", "jwk", "x5u", "x5c", "x5t","x5t#S256" and "crit" will be ignored if provided. |

#### [](#examples-29)Examples

```bloblang
root.signed = this.claims.sign_jwt_rs256("""-----BEGIN RSA PRIVATE KEY-----
... signature data ...
-----END RSA PRIVATE KEY-----""")

# In:  {"claims":{"sub":"user123"}}
# Out: {"signed":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTYyMzkwMjIsIm1vb2QiOiJEaXNkYWluZnVsIiwic3ViIjoiMTIzNDU2Nzg5MCJ9.b0lH3jEupZZ4zoaly4Y_GCvu94HH6UKdKY96zfGNsIkPZpQLHIkZ7jMWlLlNOAd8qXlsBGP_i8H2qCKI4zlWJBGyPZgxXDzNRPVrTDfFpn4t4nBcA1WK2-ntXP3ehQxsaHcQU8Z_nsogId7Pme5iJRnoHWEnWtbwz5DLSXL3ZZNnRdrHM9MdI7QSDz9mojKDCaMpGN9sG7Xl-tGdBp1XzXuUOzG8S03mtZ1IgVR1uiBL2N6oohHIAunk8DIAmNWI-zgycTgzUGU7mvPkKH43qO8Ua1-13tCUBKKa8VxcotZ67Mxm1QAvBGoDnTKwWMwghLzs6d6WViXQg6eWlJcpBA"}
```

```bloblang
root.signed = this.claims.sign_jwt_rs256(signing_secret: """-----BEGIN RSA PRIVATE KEY-----
... signature data ...
-----END RSA PRIVATE KEY-----""", headers: {"kid": "my-key", "x": "y"})

# In:  {"claims":{"sub":"user123"}}
# Out: {"signed":"<signed JWT token>"}
```

### [](#sign_jwt_rs384)sign_jwt_rs384

Hash and sign an object representing JSON Web Token (JWT) claims using RS384.

#### [](#parameters-38)Parameters

| Name | Type | Description |
| --- | --- | --- |
| signing_secret | string | The secret to use for signing the token. |
| headers (optional) | unknown | Optional object of JWT header fields to include in the token. Keys "alg", "typ", "jku", "jwk", "x5u", "x5c", "x5t","x5t#S256" and "crit" will be ignored if provided. |

#### [](#examples-30)Examples

```bloblang
root.signed = this.claims.sign_jwt_rs384("""-----BEGIN RSA PRIVATE KEY-----
... signature data ...
-----END RSA PRIVATE KEY-----""")

# In:  {"claims":{"sub":"user123"}}
# Out: {"signed":"eyJhbGciOiJSUzM4NCIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTYyMzkwMjIsIm1vb2QiOiJEaXNkYWluZnVsIiwic3ViIjoiMTIzNDU2Nzg5MCJ9.orcXYBcjVE5DU7mvq4KKWFfNdXR4nEY_xupzWoETRpYmQZIozlZnM_nHxEk2dySvpXlAzVm7kgOPK2RFtGlOVaNRIa3x-pMMr-bhZTno4L8Hl4sYxOks3bWtjK7wql4uqUbqThSJB12psAXw2-S-I_FMngOPGIn4jDT9b802ottJSvTpXcy0-eKTjrV2PSkRRu-EYJh0CJZW55MNhqlt6kCGhAXfbhNazN3ASX-dmpd_JixyBKphrngr_zRA-FCn_Xf3QQDA-5INopb4Yp5QiJ7UxVqQEKI80X_JvJqz9WE1qiAw8pq5-xTen1t7zTP-HT1NbbD3kltcNa3G8acmNg"}
```

```bloblang
root.signed = this.claims.sign_jwt_rs384(signing_secret: """-----BEGIN RSA PRIVATE KEY-----
... signature data ...
-----END RSA PRIVATE KEY-----""", headers: {"kid": "my-key", "x": "y"})

# In:  {"claims":{"sub":"user123"}}
# Out: {"signed":"<signed JWT token>"}
```

### [](#sign_jwt_rs512)sign_jwt_rs512

Hash and sign an object representing JSON Web Token (JWT) claims using RS512.

#### [](#parameters-39)Parameters

| Name | Type | Description |
| --- | --- | --- |
| signing_secret | string | The secret to use for signing the token. |
| headers (optional) | unknown | Optional object of JWT header fields to include in the token. Keys "alg", "typ", "jku", "jwk", "x5u", "x5c", "x5t","x5t#S256" and "crit" will be ignored if provided. |

#### [](#examples-31)Examples

```bloblang
root.signed = this.claims.sign_jwt_rs512("""-----BEGIN RSA PRIVATE KEY-----
... signature data ...
-----END RSA PRIVATE KEY-----""")

# In:  {"claims":{"sub":"user123"}}
# Out: {"signed":"eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTYyMzkwMjIsIm1vb2QiOiJEaXNkYWluZnVsIiwic3ViIjoiMTIzNDU2Nzg5MCJ9.rsMp_X5HMrUqKnZJIxo27aAoscovRA6SSQYR9rq7pifIj0YHXxMyNyOBDGnvVALHKTi25VUGHpfNUW0VVMmae0A4t_ObNU6hVZHguWvetKZZq4FZpW1lgWHCMqgPGwT5_uOqwYCH6r8tJuZT3pqXeL0CY4putb1AN2w6CVp620nh3l8d3XWb4jaifycd_4CEVCqHuWDmohfug4VhmoVKlIXZkYoAQowgHlozATDssBSWdYtv107Wd2AzEoiXPu6e3pflsuXULlyqQnS4ELEKPYThFLafh1NqvZDPddqozcPZ-iODBW-xf3A4DYDdivnMYLrh73AZOGHexxu8ay6nDA"}
```

```bloblang
root.signed = this.claims.sign_jwt_rs512(signing_secret: """-----BEGIN RSA PRIVATE KEY-----
... signature data ...
-----END RSA PRIVATE KEY-----""", headers: {"kid": "my-key", "x": "y"})

# In:  {"claims":{"sub":"user123"}}
# Out: {"signed":"<signed JWT token>"}
```

## [](#number-manipulation)Number manipulation

### [](#abs)abs

Returns the absolute value of an int64 or float64 number. As a special case, when an integer is provided that is the minimum value it is converted to the maximum value.

#### [](#examples-32)Examples

```bloblang
root.outs = this.ins.map_each(ele -> ele.abs())

# In:  {"ins":[9,-18,1.23,-4.56]}
# Out: {"outs":[9,18,1.23,4.56]}
```

### [](#bitwise_and)bitwise_and

Performs a bitwise AND operation between the integer and the specified value.

#### [](#parameters-40)Parameters

| Name | Type | Description |
| --- | --- | --- |
| value | integer | The value to AND with |

#### [](#examples-33)Examples

```bloblang
root.new_value = this.value.bitwise_and(6)

# In:  {"value":12}
# Out: {"new_value":4}
```

```bloblang
root.masked = this.flags.bitwise_and(15)

# In:  {"flags":127}
# Out: {"masked":15}
```

### [](#bitwise_or)bitwise_or

Performs a bitwise OR operation between the integer and the specified value.

#### [](#parameters-41)Parameters

| Name | Type | Description |
| --- | --- | --- |
| value | integer | The value to OR with |

#### [](#examples-34)Examples

```bloblang
root.new_value = this.value.bitwise_or(6)

# In:  {"value":12}
# Out: {"new_value":14}
```

```bloblang
root.combined = this.flags.bitwise_or(8)

# In:  {"flags":4}
# Out: {"combined":12}
```

### [](#bitwise_xor)bitwise_xor

Performs a bitwise XOR (exclusive OR) operation between the integer and the specified value.

#### [](#parameters-42)Parameters

| Name | Type | Description |
| --- | --- | --- |
| value | integer | The value to XOR with |

#### [](#examples-35)Examples

```bloblang
root.new_value = this.value.bitwise_xor(6)

# In:  {"value":12}
# Out: {"new_value":10}
```

```bloblang
root.toggled = this.flags.bitwise_xor(5)

# In:  {"flags":3}
# Out: {"toggled":6}
```

### [](#ceil)ceil

Rounds a number up to the nearest integer. Returns an integer if the result fits in 64-bit, otherwise returns a float.

#### [](#examples-36)Examples

```bloblang
root.new_value = this.value.ceil()

# In:  {"value":5.3}
# Out: {"new_value":6}

# In:  {"value":-5.9}
# Out: {"new_value":-5}
```

```bloblang
root.result = this.price.ceil()

# In:  {"price":19.99}
# Out: {"result":20}
```

### [](#cos)cos

Calculates the cosine of a given angle specified in radians.

#### [](#examples-37)Examples

```bloblang
root.new_value = (this.value * (pi() / 180)).cos()

# In:  {"value":45}
# Out: {"new_value":0.7071067811865476}

# In:  {"value":0}
# Out: {"new_value":1}

# In:  {"value":180}
# Out: {"new_value":-1}
```

### [](#float32)float32

Converts a numerical type into a 32-bit floating point number, this is for advanced use cases where a specific data type is needed for a given component (such as the ClickHouse SQL driver).

If the value is a string then an attempt will be made to parse it as a 32-bit floating point number. Please refer to the [`strconv.ParseFloat` documentation](https://pkg.go.dev/strconv#ParseFloat) for details regarding the supported formats.

#### [](#examples-38)Examples

```bloblang
root.out = this.in.float32()

# In:  {"in":"6.674282313423543523453425345e-11"}
# Out: {"out":6.674283e-11}
```

### [](#float64)float64

Converts a numerical type into a 64-bit floating point number, this is for advanced use cases where a specific data type is needed for a given component (such as the ClickHouse SQL driver).

If the value is a string then an attempt will be made to parse it as a 64-bit floating point number. Please refer to the [`strconv.ParseFloat` documentation](https://pkg.go.dev/strconv#ParseFloat) for details regarding the supported formats.

#### [](#examples-39)Examples

```bloblang
root.out = this.in.float64()

# In:  {"in":"6.674282313423543523453425345e-11"}
# Out: {"out":6.674282313423544e-11}
```

### [](#floor)floor

Rounds a number down to the nearest integer. Returns an integer if the result fits in 64-bit, otherwise returns a float.

#### [](#examples-40)Examples

```bloblang
root.new_value = this.value.floor()

# In:  {"value":5.7}
# Out: {"new_value":5}

# In:  {"value":-3.2}
# Out: {"new_value":-4}
```

```bloblang
root.whole_seconds = this.duration_seconds.floor()

# In:  {"duration_seconds":12.345}
# Out: {"whole_seconds":12}
```

### [](#int16)int16

Converts a numerical type into a 16-bit signed integer, this is for advanced use cases where a specific data type is needed for a given component (such as the ClickHouse SQL driver).

If the value is a string then an attempt will be made to parse it as a 16-bit signed integer. If the target value exceeds the capacity of an integer or contains decimal values then this method will throw an error. In order to convert a floating point number containing decimals first use [`.round()`](#round) on the value. Please refer to the [`strconv.ParseInt` documentation](https://pkg.go.dev/strconv#ParseInt) for details regarding the supported formats.

#### [](#examples-41)Examples

```bloblang
root.a = this.a.int16()
root.b = this.b.round().int16()
root.c = this.c.int16()
root.d = this.d.int16().catch(0)

# In:  {"a":12,"b":12.34,"c":"12","d":-12}
# Out: {"a":12,"b":12,"c":12,"d":-12}
```

```bloblang
root = this.int16()

# In:  "0xDE"
# Out: 222
```

### [](#int32)int32

Converts a numerical type into a 32-bit signed integer, this is for advanced use cases where a specific data type is needed for a given component (such as the ClickHouse SQL driver).

If the value is a string then an attempt will be made to parse it as a 32-bit signed integer. If the target value exceeds the capacity of an integer or contains decimal values then this method will throw an error. In order to convert a floating point number containing decimals first use [`.round()`](#round) on the value. Please refer to the [`strconv.ParseInt` documentation](https://pkg.go.dev/strconv#ParseInt) for details regarding the supported formats.

#### [](#examples-42)Examples

```bloblang
root.a = this.a.int32()
root.b = this.b.round().int32()
root.c = this.c.int32()
root.d = this.d.int32().catch(0)

# In:  {"a":12,"b":12.34,"c":"12","d":-12}
# Out: {"a":12,"b":12,"c":12,"d":-12}
```

```bloblang
root = this.int32()

# In:  "0xDEAD"
# Out: 57005
```

### [](#int64)int64

Converts a numerical type into a 64-bit signed integer, this is for advanced use cases where a specific data type is needed for a given component (such as the ClickHouse SQL driver).

If the value is a string then an attempt will be made to parse it as a 64-bit signed integer. If the target value exceeds the capacity of an integer or contains decimal values then this method will throw an error. In order to convert a floating point number containing decimals first use [`.round()`](#round) on the value. Please refer to the [`strconv.ParseInt` documentation](https://pkg.go.dev/strconv#ParseInt) for details regarding the supported formats.

#### [](#examples-43)Examples

```bloblang
root.a = this.a.int64()
root.b = this.b.round().int64()
root.c = this.c.int64()
root.d = this.d.int64().catch(0)

# In:  {"a":12,"b":12.34,"c":"12","d":-12}
# Out: {"a":12,"b":12,"c":12,"d":-12}
```

```bloblang
root = this.int64()

# In:  "0xDEADBEEF"
# Out: 3735928559
```

### [](#int8)int8

Converts a numerical type into a 8-bit signed integer, this is for advanced use cases where a specific data type is needed for a given component (such as the ClickHouse SQL driver).

If the value is a string then an attempt will be made to parse it as a 8-bit signed integer. If the target value exceeds the capacity of an integer or contains decimal values then this method will throw an error. In order to convert a floating point number containing decimals first use [`.round()`](#round) on the value. Please refer to the [`strconv.ParseInt` documentation](https://pkg.go.dev/strconv#ParseInt) for details regarding the supported formats.

#### [](#examples-44)Examples

```bloblang
root.a = this.a.int8()
root.b = this.b.round().int8()
root.c = this.c.int8()
root.d = this.d.int8().catch(0)

# In:  {"a":12,"b":12.34,"c":"12","d":-12}
# Out: {"a":12,"b":12,"c":12,"d":-12}
```

```bloblang
root = this.int8()

# In:  "0xD"
# Out: 13
```

### [](#log)log

Calculates the natural logarithm (base e) of a number.

#### [](#examples-45)Examples

```bloblang
root.new_value = this.value.log().round()

# In:  {"value":1}
# Out: {"new_value":0}

# In:  {"value":2.7183}
# Out: {"new_value":1}
```

```bloblang
root.ln_result = this.number.log()

# In:  {"number":10}
# Out: {"ln_result":2.302585092994046}
```

### [](#log10)log10

Calculates the base-10 logarithm of a number.

#### [](#examples-46)Examples

```bloblang
root.new_value = this.value.log10()

# In:  {"value":100}
# Out: {"new_value":2}

# In:  {"value":1000}
# Out: {"new_value":3}
```

```bloblang
root.log_value = this.magnitude.log10()

# In:  {"magnitude":10000}
# Out: {"log_value":4}
```

### [](#max)max

Returns the largest number from an array. All elements must be numbers and the array cannot be empty.

#### [](#examples-47)Examples

```bloblang
root.biggest = this.values.max()

# In:  {"values":[0,3,2.5,7,5]}
# Out: {"biggest":7}
```

```bloblang
root.highest_temp = this.temperatures.max()

# In:  {"temperatures":[20.5,22.1,19.8,23.4]}
# Out: {"highest_temp":23.4}
```

### [](#min)min

Returns the smallest number from an array. All elements must be numbers and the array cannot be empty.

#### [](#examples-48)Examples

```bloblang
root.smallest = this.values.min()

# In:  {"values":[0,3,-2.5,7,5]}
# Out: {"smallest":-2.5}
```

```bloblang
root.lowest_temp = this.temperatures.min()

# In:  {"temperatures":[20.5,22.1,19.8,23.4]}
# Out: {"lowest_temp":19.8}
```

### [](#pow)pow

Returns the number raised to the specified exponent.

#### [](#parameters-43)Parameters

| Name | Type | Description |
| --- | --- | --- |
| exponent | float | The exponent you want to raise to the power of. |

#### [](#examples-49)Examples

```bloblang
root.new_value = this.value * 10.pow(-2)

# In:  {"value":2}
# Out: {"new_value":0.02}
```

```bloblang
root.new_value = this.value.pow(-2)

# In:  {"value":2}
# Out: {"new_value":0.25}
```

### [](#round)round

Rounds a number to the nearest integer. Values at .5 round away from zero. Returns an integer if the result fits in 64-bit, otherwise returns a float.

#### [](#examples-50)Examples

```bloblang
root.new_value = this.value.round()

# In:  {"value":5.3}
# Out: {"new_value":5}

# In:  {"value":5.9}
# Out: {"new_value":6}
```

```bloblang
root.rounded = this.score.round()

# In:  {"score":87.5}
# Out: {"rounded":88}
```

### [](#sin)sin

Calculates the sine of a given angle specified in radians.

#### [](#examples-51)Examples

```bloblang
root.new_value = (this.value * (pi() / 180)).sin()

# In:  {"value":45}
# Out: {"new_value":0.7071067811865475}

# In:  {"value":0}
# Out: {"new_value":0}

# In:  {"value":90}
# Out: {"new_value":1}
```

### [](#tan)tan

Calculates the tangent of a given angle specified in radians.

#### [](#examples-52)Examples

```bloblang
root.new_value = "%f".format((this.value * (pi() / 180)).tan())

# In:  {"value":0}
# Out: {"new_value":"0.000000"}

# In:  {"value":45}
# Out: {"new_value":"1.000000"}

# In:  {"value":180}
# Out: {"new_value":"-0.000000"}
```

### [](#uint16)uint16

Converts a numerical type into a 16-bit unsigned integer, this is for advanced use cases where a specific data type is needed for a given component (such as the ClickHouse SQL driver).

If the value is a string then an attempt will be made to parse it as a 16-bit unsigned integer. If the target value exceeds the capacity of an integer or contains decimal values then this method will throw an error. In order to convert a floating point number containing decimals first use [`.round()`](#round) on the value. Please refer to the [`strconv.ParseInt` documentation](https://pkg.go.dev/strconv#ParseInt) for details regarding the supported formats.

#### [](#examples-53)Examples

```bloblang
root.a = this.a.uint16()
root.b = this.b.round().uint16()
root.c = this.c.uint16()
root.d = this.d.uint16().catch(0)

# In:  {"a":12,"b":12.34,"c":"12","d":-12}
# Out: {"a":12,"b":12,"c":12,"d":0}
```

```bloblang
root = this.uint16()

# In:  "0xDE"
# Out: 222
```

### [](#uint32)uint32

Converts a numerical type into a 32-bit unsigned integer, this is for advanced use cases where a specific data type is needed for a given component (such as the ClickHouse SQL driver).

If the value is a string then an attempt will be made to parse it as a 32-bit unsigned integer. If the target value exceeds the capacity of an integer or contains decimal values then this method will throw an error. In order to convert a floating point number containing decimals first use [`.round()`](#round) on the value. Please refer to the [`strconv.ParseInt` documentation](https://pkg.go.dev/strconv#ParseInt) for details regarding the supported formats.

#### [](#examples-54)Examples

```bloblang
root.a = this.a.uint32()
root.b = this.b.round().uint32()
root.c = this.c.uint32()
root.d = this.d.uint32().catch(0)

# In:  {"a":12,"b":12.34,"c":"12","d":-12}
# Out: {"a":12,"b":12,"c":12,"d":0}
```

```bloblang
root = this.uint32()

# In:  "0xDEAD"
# Out: 57005
```

### [](#uint64)uint64

Converts a numerical type into a 64-bit unsigned integer, this is for advanced use cases where a specific data type is needed for a given component (such as the ClickHouse SQL driver).

If the value is a string then an attempt will be made to parse it as a 64-bit unsigned integer. If the target value exceeds the capacity of an integer or contains decimal values then this method will throw an error. In order to convert a floating point number containing decimals first use [`.round()`](#round) on the value. Please refer to the [`strconv.ParseInt` documentation](https://pkg.go.dev/strconv#ParseInt) for details regarding the supported formats.

#### [](#examples-55)Examples

```bloblang
root.a = this.a.uint64()
root.b = this.b.round().uint64()
root.c = this.c.uint64()
root.d = this.d.uint64().catch(0)

# In:  {"a":12,"b":12.34,"c":"12","d":-12}
# Out: {"a":12,"b":12,"c":12,"d":0}
```

```bloblang
root = this.uint64()

# In:  "0xDEADBEEF"
# Out: 3735928559
```

### [](#uint8)uint8

Converts a numerical type into a 8-bit unsigned integer, this is for advanced use cases where a specific data type is needed for a given component (such as the ClickHouse SQL driver).

If the value is a string then an attempt will be made to parse it as a 8-bit unsigned integer. If the target value exceeds the capacity of an integer or contains decimal values then this method will throw an error. In order to convert a floating point number containing decimals first use [`.round()`](#round) on the value. Please refer to the [`strconv.ParseInt` documentation](https://pkg.go.dev/strconv#ParseInt) for details regarding the supported formats.

#### [](#examples-56)Examples

```bloblang
root.a = this.a.uint8()
root.b = this.b.round().uint8()
root.c = this.c.uint8()
root.d = this.d.uint8().catch(0)

# In:  {"a":12,"b":12.34,"c":"12","d":-12}
# Out: {"a":12,"b":12,"c":12,"d":0}
```

```bloblang
root = this.uint8()

# In:  "0xD"
# Out: 13
```

## [](#object-array-manipulation)Object & array manipulation

### [](#all)all

Tests whether all elements in an array satisfy a condition. Returns true only if the query evaluates to true for every element. Returns false for empty arrays.

#### [](#parameters-44)Parameters

| Name | Type | Description |
| --- | --- | --- |
| test | query expression | A test query to apply to each element. |

#### [](#examples-57)Examples

```bloblang
root.all_over_21 = this.patrons.all(patron -> patron.age >= 21)

# In:  {"patrons":[{"id":"1","age":18},{"id":"2","age":23}]}
# Out: {"all_over_21":false}

# In:  {"patrons":[{"id":"1","age":45},{"id":"2","age":23}]}
# Out: {"all_over_21":true}
```

```bloblang
root.all_positive = this.values.all(v -> v > 0)

# In:  {"values":[1,2,3,4,5]}
# Out: {"all_positive":true}

# In:  {"values":[1,-2,3,4,5]}
# Out: {"all_positive":false}
```

### [](#any)any

Tests whether at least one element in an array satisfies a condition. Returns true if the query evaluates to true for any element. Returns false for empty arrays.

#### [](#parameters-45)Parameters

| Name | Type | Description |
| --- | --- | --- |
| test | query expression | A test query to apply to each element. |

#### [](#examples-58)Examples

```bloblang
root.any_over_21 = this.patrons.any(patron -> patron.age >= 21)

# In:  {"patrons":[{"id":"1","age":18},{"id":"2","age":23}]}
# Out: {"any_over_21":true}

# In:  {"patrons":[{"id":"1","age":10},{"id":"2","age":12}]}
# Out: {"any_over_21":false}
```

```bloblang
root.has_errors = this.results.any(r -> r.status == "error")

# In:  {"results":[{"status":"ok"},{"status":"error"},{"status":"ok"}]}
# Out: {"has_errors":true}

# In:  {"results":[{"status":"ok"},{"status":"ok"}]}
# Out: {"has_errors":false}
```

### [](#append)append

Adds one or more elements to the end of an array and returns the new array. The original array is not modified.

#### [](#examples-59)Examples

```bloblang
root.foo = this.foo.append("and", "this")

# In:  {"foo":["bar","baz"]}
# Out: {"foo":["bar","baz","and","this"]}
```

```bloblang
root.combined = this.items.append(this.new_item)

# In:  {"items":["apple","banana"],"new_item":"orange"}
# Out: {"combined":["apple","banana","orange"]}
```

### [](#assign)assign

Merges two objects or arrays with override behavior. For objects, source values replace destination values on key conflicts. Arrays are concatenated. To preserve both values on conflict, use the merge method instead.

#### [](#parameters-46)Parameters

| Name | Type | Description |
| --- | --- | --- |
| with | unknown | A value to merge the target value with. |

#### [](#examples-60)Examples

```bloblang
root = this.foo.assign(this.bar)

# In:  {"foo":{"first_name":"fooer","likes":"bars"},"bar":{"second_name":"barer","likes":"foos"}}
# Out: {"first_name":"fooer","likes":"foos","second_name":"barer"}
```

Override defaults with user settings:

```bloblang
root.config = this.defaults.assign(this.user_settings)

# In:  {"defaults":{"timeout":30,"retries":3},"user_settings":{"timeout":60}}
# Out: {"config":{"retries":3,"timeout":60}}
```

### [](#collapse)collapse

Flattens a nested structure into a flat object with dot-notation keys.

#### [](#parameters-47)Parameters

| Name | Type | Description |
| --- | --- | --- |
| include_empty | bool | Whether to include empty objects and arrays in the resulting object. |

#### [](#examples-61)Examples

```bloblang
root.result = this.collapse()

# In:  {"foo":[{"bar":"1"},{"bar":{}},{"bar":"2"},{"bar":[]}]}
# Out: {"result":{"foo.0.bar":"1","foo.2.bar":"2"}}
```

Set include\_empty to true to preserve empty objects and arrays in the output:

```bloblang
root.result = this.collapse(include_empty: true)

# In:  {"foo":[{"bar":"1"},{"bar":{}},{"bar":"2"},{"bar":[]}]}
# Out: {"result":{"foo.0.bar":"1","foo.1.bar":{},"foo.2.bar":"2","foo.3.bar":[]}}
```

### [](#concat)concat

Concatenates an array value with one or more argument arrays.

#### [](#examples-62)Examples

```bloblang
root.foo = this.foo.concat(this.bar, this.baz)

# In:  {"foo":["a","b"],"bar":["c"],"baz":["d","e","f"]}
# Out: {"foo":["a","b","c","d","e","f"]}
```

### [](#contains)contains

Tests if an array or object contains a value.

#### [](#parameters-48)Parameters

| Name | Type | Description |
| --- | --- | --- |
| value | unknown | A value to test against elements of the target. |

#### [](#examples-63)Examples

```bloblang
root.has_foo = this.thing.contains("foo")

# In:  {"thing":["this","foo","that"]}
# Out: {"has_foo":true}

# In:  {"thing":["this","bar","that"]}
# Out: {"has_foo":false}
```

```bloblang
root.has_bar = this.thing.contains(20)

# In:  {"thing":[10.3,20.0,"huh",3]}
# Out: {"has_bar":true}

# In:  {"thing":[2,3,40,67]}
# Out: {"has_bar":false}
```

```bloblang
root.has_foo = this.thing.contains("foo")

# In:  {"thing":"this foo that"}
# Out: {"has_foo":true}

# In:  {"thing":"this bar that"}
# Out: {"has_foo":false}
```

### [](#diff)diff

Compares the current value with another value and returns a detailed changelog describing all differences. The changelog contains operations (create, update, delete) with their paths and values, enabling you to track changes between data versions, implement audit logs, or synchronize data between systems.

#### [](#parameters-49)Parameters

| Name | Type | Description |
| --- | --- | --- |
| other | unknown | The value to compare against the current value. Can be any structured data (object or array). |

#### [](#examples-64)Examples

Compare two objects to track field changes:

```bloblang
root.changes = this.before.diff(this.after)

# In:  {"before":{"name":"Alice","age":30},"after":{"name":"Alice","age":31,"city":"NYC"}}
# Out: {"changes":[{"From":30,"Path":["age"],"To":31,"Type":"update"},{"From":null,"Path":["city"],"To":"NYC","Type":"create"}]}
```

Detect deletions in configuration changes:

```bloblang
root.changelog = this.old_config.diff(this.new_config)

# In:  {"old_config":{"debug":true,"timeout":30},"new_config":{"timeout":60}}
# Out: {"changelog":[{"From":true,"Path":["debug"],"To":null,"Type":"delete"},{"From":30,"Path":["timeout"],"To":60,"Type":"update"}]}
```

### [](#enumerated)enumerated

Transforms an array into an array of objects with index and value fields, making it easy to access both the position and content of each element.

#### [](#examples-65)Examples

```bloblang
root.foo = this.foo.enumerated()

# In:  {"foo":["bar","baz"]}
# Out: {"foo":[{"index":0,"value":"bar"},{"index":1,"value":"baz"}]}
```

Useful for filtering by index position:

```bloblang
root.first_two = this.items.enumerated().filter(item -> item.index < 2).map_each(item -> item.value)

# In:  {"items":["a","b","c","d"]}
# Out: {"first_two":["a","b"]}
```

### [](#exists)exists

Checks whether a field exists at the specified dot path within an object. Returns true if the field is present (even if null), false otherwise.

#### [](#parameters-50)Parameters

| Name | Type | Description |
| --- | --- | --- |
| path | string | A dot path to a field. |

#### [](#examples-66)Examples

```bloblang
root.result = this.foo.exists("bar.baz")

# In:  {"foo":{"bar":{"baz":"yep, I exist"}}}
# Out: {"result":true}

# In:  {"foo":{"bar":{}}}
# Out: {"result":false}

# In:  {"foo":{}}
# Out: {"result":false}
```

Also returns true for null values if the field exists:

```bloblang
root.has_field = this.data.exists("optional_field")

# In:  {"data":{"optional_field":null}}
# Out: {"has_field":true}

# In:  {"data":{}}
# Out: {"has_field":false}
```

### [](#explode)explode

Expands a nested field into multiple documents.

#### [](#parameters-51)Parameters

| Name | Type | Description |
| --- | --- | --- |
| path | string | A dot path to a field to explode. |

#### [](#examples-67)Examples

##### [](#on-arrays)On arrays

When exploding an array, each element becomes a separate document with the array element replacing the original field:

```bloblang
root = this.explode("value")

# In:  {"id":1,"value":["foo","bar","baz"]}
# Out: [{"id":1,"value":"foo"},{"id":1,"value":"bar"},{"id":1,"value":"baz"}]
```

##### [](#on-objects)On objects

When exploding an object, the output keys match the nested object’s keys, with values being the full document where the target field is replaced by each nested value:

```bloblang
root = this.explode("value")

# In:  {"id":1,"value":{"foo":2,"bar":[3,4],"baz":{"bev":5}}}
# Out: {"bar":{"id":1,"value":[3,4]},"baz":{"id":1,"value":{"bev":5}},"foo":{"id":1,"value":2}}
```

### [](#filter)filter

Filters array or object elements based on a condition.

#### [](#parameters-52)Parameters

| Name | Type | Description |
| --- | --- | --- |
| test | query expression | A query to apply to each element, if this query resolves to any value other than a boolean true the element will be removed from the result. |

#### [](#examples-68)Examples

```bloblang
root.new_nums = this.nums.filter(num -> num > 10)

# In:  {"nums":[3,11,4,17]}
# Out: {"new_nums":[11,17]}
```

##### [](#on-objects-2)On objects

When filtering objects, the query receives a context with `key` and `value` fields for each entry:

```bloblang
root.new_dict = this.dict.filter(item -> item.value.contains("foo"))

# In:  {"dict":{"first":"hello foo","second":"world","third":"this foo is great"}}
# Out: {"new_dict":{"first":"hello foo","third":"this foo is great"}}
```

### [](#find)find

Searches an array for a matching value and returns the index of the first occurrence. Returns -1 if no match is found. Numeric types are compared by value regardless of representation.

#### [](#parameters-53)Parameters

| Name | Type | Description |
| --- | --- | --- |
| value | unknown | A value to find. |

#### [](#examples-69)Examples

```bloblang
root.index = this.find("bar")

# In:  ["foo", "bar", "baz"]
# Out: {"index":1}
```

```bloblang
root.index = this.things.find(this.goal)

# In:  {"goal":"bar","things":["foo", "bar", "baz"]}
# Out: {"index":1}
```

### [](#find_all)find_all

Searches an array for all occurrences of a value and returns an array of matching indexes. Returns an empty array if no matches are found. Numeric types are compared by value regardless of representation.

#### [](#parameters-54)Parameters

| Name | Type | Description |
| --- | --- | --- |
| value | unknown | A value to find. |

#### [](#examples-70)Examples

```bloblang
root.index = this.find_all("bar")

# In:  ["foo", "bar", "baz", "bar"]
# Out: {"index":[1,3]}
```

```bloblang
root.indexes = this.things.find_all(this.goal)

# In:  {"goal":"bar","things":["foo", "bar", "baz", "bar", "buz"]}
# Out: {"indexes":[1,3]}
```

### [](#find_all_by)find_all_by

Searches an array for all elements that satisfy a condition and returns an array of their indexes. Returns an empty array if no elements match.

#### [](#parameters-55)Parameters

| Name | Type | Description |
| --- | --- | --- |
| query | query expression | A query to execute for each element. |

#### [](#examples-71)Examples

```bloblang
root.index = this.find_all_by(v -> v != "bar")

# In:  ["foo", "bar", "baz"]
# Out: {"index":[0,2]}
```

Find all indexes matching criteria:

```bloblang
root.error_indexes = this.logs.find_all_by(log -> log.level == "error")

# In:  {"logs":[{"level":"info"},{"level":"error"},{"level":"warn"},{"level":"error"}]}
# Out: {"error_indexes":[1,3]}
```

### [](#find_by)find_by

Searches an array for the first element that satisfies a condition and returns its index. Returns -1 if no element matches the query.

#### [](#parameters-56)Parameters

| Name | Type | Description |
| --- | --- | --- |
| query | query expression | A query to execute for each element. |

#### [](#examples-72)Examples

```bloblang
root.index = this.find_by(v -> v != "bar")

# In:  ["foo", "bar", "baz"]
# Out: {"index":0}
```

Find first object matching criteria:

```bloblang
root.first_adult = this.users.find_by(u -> u.age >= 18)

# In:  {"users":[{"name":"Alice","age":15},{"name":"Bob","age":22},{"name":"Carol","age":19}]}
# Out: {"first_adult":1}
```

### [](#flatten)flatten

Flattens an array by one level, expanding nested arrays into the parent array. Only the first level of nesting is removed.

#### [](#examples-73)Examples

```bloblang
root.result = this.flatten()

# In:  ["foo",["bar","baz"],"buz"]
# Out: {"result":["foo","bar","baz","buz"]}
```

Deeper nesting requires multiple flatten calls:

```bloblang
root.result = this.data.flatten()

# In:  {"data":["a",["b",["c","d"]],"e"]}
# Out: {"result":["a","b",["c","d"],"e"]}
```

### [](#fold)fold

Reduces an array to a single value by iteratively applying a function. Also known as reduce or aggregate. The query receives an accumulator (tally) and current element (value) for each iteration.

#### [](#parameters-57)Parameters

| Name | Type | Description |
| --- | --- | --- |
| initial | unknown | The initial value to start the fold with. For example, an empty object {}, a zero count 0, or an empty string "". |
| query | query expression | A query to apply for each element. The query is provided an object with two fields; tally containing the current tally, and value containing the value of the current element. The query should result in a new tally to be passed to the next element query. |

#### [](#examples-74)Examples

Sum numbers in an array:

```bloblang
root.sum = this.foo.fold(0, item -> item.tally + item.value)

# In:  {"foo":[3,8,11]}
# Out: {"sum":22}
```

Concatenate strings:

```bloblang
root.result = this.foo.fold("", item -> "%v%v".format(item.tally, item.value))

# In:  {"foo":["hello ", "world"]}
# Out: {"result":"hello world"}
```

Merge an array of objects into a single object:

```bloblang
root.smoothie = this.fruits.fold({}, item -> item.tally.merge(item.value))

# In:  {"fruits":[{"apple":5},{"banana":3},{"orange":8}]}
# Out: {"smoothie":{"apple":5,"banana":3,"orange":8}}
```

### [](#get)get

Extract a field value, identified via a [dot path](https://docs.redpanda.com/redpanda-connect/configuration/field_paths/), from an object.

#### [](#parameters-58)Parameters

| Name | Type | Description |
| --- | --- | --- |
| path | string | A dot path identifying a field to obtain. |

#### [](#examples-75)Examples

```bloblang
root.result = this.foo.get(this.target)

# In:  {"foo":{"bar":"from bar","baz":"from baz"},"target":"bar"}
# Out: {"result":"from bar"}

# In:  {"foo":{"bar":"from bar","baz":"from baz"},"target":"baz"}
# Out: {"result":"from baz"}
```

### [](#index)index

Extract an element from an array by an index. The index can be negative, and if so the element will be selected from the end counting backwards starting from -1. E.g. an index of -1 returns the last element, an index of -2 returns the element before the last, and so on.

#### [](#parameters-59)Parameters

| Name | Type | Description |
| --- | --- | --- |
| index | integer | The index to obtain from an array. |

#### [](#examples-76)Examples

```bloblang
root.last_name = this.names.index(-1)

# In:  {"names":["rachel","stevens"]}
# Out: {"last_name":"stevens"}
```

It is also possible to use this method on byte arrays, in which case the selected element will be returned as an integer:

```bloblang
root.last_byte = this.name.bytes().index(-1)

# In:  {"name":"foobar bazson"}
# Out: {"last_byte":110}
```

### [](#join)join

Joins an array of strings with an optional delimiter.

#### [](#parameters-60)Parameters

| Name | Type | Description |
| --- | --- | --- |
| delimiter (optional) | string | An optional delimiter to add between each string. |

#### [](#examples-77)Examples

```bloblang
root.joined_words = this.words.join()
root.joined_numbers = this.numbers.map_each(this.string()).join(",")

# In:  {"words":["hello","world"],"numbers":[3,8,11]}
# Out: {"joined_numbers":"3,8,11","joined_words":"helloworld"}
```

### [](#json_path)json_path

Executes the given JSONPath expression on an object or array and returns the result. The JSONPath expression syntax can be found at [https://goessner.net/articles/JsonPath/](https://goessner.net/articles/JsonPath/). For more complex logic, you can use Gval expressions ([https://github.com/PaesslerAG/gval](https://github.com/PaesslerAG/gval)).

#### [](#parameters-61)Parameters

| Name | Type | Description |
| --- | --- | --- |
| expression | string | The JSONPath expression to execute. |

#### [](#examples-78)Examples

```bloblang
root.all_names = this.json_path("$..name")

# In:  {"name":"alice","foo":{"name":"bob"}}
# Out: {"all_names":["alice","bob"]}

# In:  {"thing":["this","bar",{"name":"alice"}]}
# Out: {"all_names":["alice"]}
```

```bloblang
root.text_objects = this.json_path("$.body[?(@.type=='text')]")

# In:  {"body":[{"type":"image","id":"foo"},{"type":"text","id":"bar"}]}
# Out: {"text_objects":[{"id":"bar","type":"text"}]}
```

### [](#json_schema)json_schema

Checks a [JSON schema](https://json-schema.org/) against a value and returns the value if it matches or throws and error if it does not.

#### [](#parameters-62)Parameters

| Name | Type | Description |
| --- | --- | --- |
| schema | string | The schema to check values against. |

#### [](#examples-79)Examples

```bloblang
root = this.json_schema("""{
  "type":"object",
  "properties":{
    "foo":{
      "type":"string"
    }
  }
}""")

# In:  {"foo":"bar"}
# Out: {"foo":"bar"}

# In:  {"foo":5}
# Out: Error("failed assignment (line 1): field `this`: foo invalid type. expected: string, given: integer")
```

In order to load a schema from a file use the `file` function:

```bloblang
root = this.json_schema(file(env("BENTHOS_TEST_BLOBLANG_SCHEMA_FILE")))
```

### [](#key_values)key_values

Converts an object into an array of key-value pair objects. Each element has a 'key' field and a 'value' field. Order is not guaranteed unless sorted.

#### [](#examples-80)Examples

```bloblang
root.foo_key_values = this.foo.key_values().sort_by(pair -> pair.key)

# In:  {"foo":{"bar":1,"baz":2}}
# Out: {"foo_key_values":[{"key":"bar","value":1},{"key":"baz","value":2}]}
```

Filter object entries by value:

```bloblang
root.large_items = this.items.key_values().filter(pair -> pair.value > 15).map_each(pair -> pair.key)

# In:  {"items":{"a":5,"b":15,"c":20,"d":3}}
# Out: {"large_items":["c"]}
```

### [](#keys)keys

Extracts all keys from an object and returns them as a sorted array.

#### [](#examples-81)Examples

```bloblang
root.foo_keys = this.foo.keys()

# In:  {"foo":{"bar":1,"baz":2}}
# Out: {"foo_keys":["bar","baz"]}
```

Check if specific keys exist:

```bloblang
root.has_id = this.data.keys().contains("id")

# In:  {"data":{"id":123,"name":"test"}}
# Out: {"has_id":true}
```

### [](#length)length

Returns the length of an array, object, or string.

#### [](#examples-82)Examples

```bloblang
root.foo_len = this.foo.length()

# In:  {"foo":"hello world"}
# Out: {"foo_len":11}
```

```bloblang
root.foo_len = this.foo.length()

# In:  {"foo":["first","second"]}
# Out: {"foo_len":2}

# In:  {"foo":{"first":"bar","second":"baz"}}
# Out: {"foo_len":2}
```

### [](#map_each)map_each

Applies a mapping to each element of an array or object.

#### [](#parameters-63)Parameters

| Name | Type | Description |
| --- | --- | --- |
| query | query expression | A query that will be used to map each element. |

#### [](#examples-83)Examples

##### [](#on-arrays-2)On arrays

Transforms each array element using a query. Return deleted() to remove an element, or the new value to replace it:

```bloblang
root.new_nums = this.nums.map_each(num -> if num < 10 {
  deleted()
} else {
  num - 10
})

# In:  {"nums":[3,11,4,17]}
# Out: {"new_nums":[1,7]}
```

##### [](#on-objects-3)On objects

Transforms each object value using a query. The query receives an object with 'key' and 'value' fields for each entry:

```bloblang
root.new_dict = this.dict.map_each(item -> item.value.uppercase())

# In:  {"dict":{"foo":"hello","bar":"world"}}
# Out: {"new_dict":{"bar":"WORLD","foo":"HELLO"}}
```

### [](#map_each_key)map_each_key

Transforms object keys using a mapping query.

#### [](#parameters-64)Parameters

| Name | Type | Description |
| --- | --- | --- |
| query | query expression | A query that will be used to map each key. |

#### [](#examples-84)Examples

```bloblang
root.new_dict = this.dict.map_each_key(key -> key.uppercase())

# In:  {"dict":{"keya":"hello","keyb":"world"}}
# Out: {"new_dict":{"KEYA":"hello","KEYB":"world"}}
```

Conditionally transform keys:

```bloblang
root = this.map_each_key(key -> if key.contains("kafka") { "_" + key })

# In:  {"amqp_key":"foo","kafka_key":"bar","kafka_topic":"baz"}
# Out: {"_kafka_key":"bar","_kafka_topic":"baz","amqp_key":"foo"}
```

### [](#merge)merge

Combines two objects or arrays. When merging objects, conflicting keys create arrays containing both values. Arrays are concatenated. For key override behavior instead, use the assign method.

#### [](#parameters-65)Parameters

| Name | Type | Description |
| --- | --- | --- |
| with | unknown | A value to merge the target value with. |

#### [](#examples-85)Examples

```bloblang
root = this.foo.merge(this.bar)

# In:  {"foo":{"first_name":"fooer","likes":"bars"},"bar":{"second_name":"barer","likes":"foos"}}
# Out: {"first_name":"fooer","likes":["bars","foos"],"second_name":"barer"}
```

Merge arrays:

```bloblang
root.combined = this.list1.merge(this.list2)

# In:  {"list1":["a","b"],"list2":["c","d"]}
# Out: {"combined":["a","b","c","d"]}
```

### [](#patch)patch

Applies a changelog (created by the diff method) to the current value, transforming it according to the specified operations. This enables you to synchronize data, replay changes, or implement event sourcing patterns by applying recorded changes to reconstruct state.

#### [](#parameters-66)Parameters

| Name | Type | Description |
| --- | --- | --- |
| changelog | unknown | The changelog array to apply. Should be in the format returned by the diff method, containing Type, Path, From, and To fields for each change. |

#### [](#examples-86)Examples

Apply recorded changes to update an object:

```bloblang
root.updated = this.current.patch(this.changelog)

# In:  {"current":{"name":"Alice","age":30},"changelog":[{"Type":"update","Path":["age"],"From":30,"To":31},{"Type":"create","Path":["city"],"From":null,"To":"NYC"}]}
# Out: {"updated":{"age":31,"city":"NYC","name":"Alice"}}
```

Restore previous state by applying inverse changes:

```bloblang
root.restored = this.modified.patch(this.reverse_changelog)

# In:  {"modified":{"timeout":60},"reverse_changelog":[{"Type":"create","Path":["debug"],"From":null,"To":true},{"Type":"update","Path":["timeout"],"From":60,"To":30}]}
# Out: {"restored":{"debug":true,"timeout":30}}
```

### [](#slice)slice

Extracts a portion of an array or string.

#### [](#parameters-67)Parameters

| Name | Type | Description |
| --- | --- | --- |
| low | integer | The low bound, which is the first element of the selection, or if negative selects from the end. |
| high (optional) | integer | An optional high bound. |

#### [](#examples-87)Examples

```bloblang
root.beginning = this.value.slice(0, 2)
root.end = this.value.slice(4)

# In:  {"value":"foo bar"}
# Out: {"beginning":"fo","end":"bar"}
```

A negative low index can be used, indicating an offset from the end of the sequence. If the low index is greater than the length of the sequence then an empty result is returned:

```bloblang
root.last_chunk = this.value.slice(-4)
root.the_rest = this.value.slice(0, -4)

# In:  {"value":"foo bar"}
# Out: {"last_chunk":" bar","the_rest":"foo"}
```

```bloblang
root.beginning = this.value.slice(0, 2)
root.end = this.value.slice(4)

# In:  {"value":["foo","bar","baz","buz","bev"]}
# Out: {"beginning":["foo","bar"],"end":["bev"]}
```

A negative low index can be used, indicating an offset from the end of the sequence. If the low index is greater than the length of the sequence then an empty result is returned:

```bloblang
root.last_chunk = this.value.slice(-2)
root.the_rest = this.value.slice(0, -2)

# In:  {"value":["foo","bar","baz","buz","bev"]}
# Out: {"last_chunk":["buz","bev"],"the_rest":["foo","bar","baz"]}
```

### [](#sort)sort

Sorts array elements in ascending order.

#### [](#parameters-68)Parameters

| Name | Type | Description |
| --- | --- | --- |
| compare (optional) | query expression | An optional query that should explicitly compare elements left and right and provide a boolean result. |

#### [](#examples-88)Examples

```bloblang
root.sorted = this.foo.sort()

# In:  {"foo":["bbb","ccc","aaa"]}
# Out: {"sorted":["aaa","bbb","ccc"]}
```

Custom comparison for complex objects - return true if left < right:

```bloblang
root.sorted = this.foo.sort(item -> item.left.v < item.right.v)

# In:  {"foo":[{"id":"foo","v":"bbb"},{"id":"bar","v":"ccc"},{"id":"baz","v":"aaa"}]}
# Out: {"sorted":[{"id":"baz","v":"aaa"},{"id":"foo","v":"bbb"},{"id":"bar","v":"ccc"}]}
```

### [](#sort_by)sort_by

Sorts array elements by a specified field or expression.

#### [](#parameters-69)Parameters

| Name | Type | Description |
| --- | --- | --- |
| query | query expression | A query to apply to each element that yields a value used for sorting. |

#### [](#examples-89)Examples

```bloblang
root.sorted = this.foo.sort_by(ele -> ele.id)

# In:  {"foo":[{"id":"bbb","message":"bar"},{"id":"aaa","message":"foo"},{"id":"ccc","message":"baz"}]}
# Out: {"sorted":[{"id":"aaa","message":"foo"},{"id":"bbb","message":"bar"},{"id":"ccc","message":"baz"}]}
```

Sort by numeric field:

```bloblang
root.sorted = this.items.sort_by(item -> item.priority)

# In:  {"items":[{"name":"low","priority":3},{"name":"high","priority":1},{"name":"med","priority":2}]}
# Out: {"sorted":[{"name":"high","priority":1},{"name":"med","priority":2},{"name":"low","priority":3}]}
```

### [](#squash)squash

Squashes an array of objects into a single object, where key collisions result in the values being merged (following similar rules as the `.merge()` method).

#### [](#examples-90)Examples

```bloblang
root.locations = this.locations.map_each(loc -> {loc.state: [loc.name]}).squash()

# In:  {"locations":[{"name":"Seattle","state":"WA"},{"name":"New York","state":"NY"},{"name":"Bellevue","state":"WA"},{"name":"Olympia","state":"WA"}]}
# Out: {"locations":{"NY":["New York"],"WA":["Seattle","Bellevue","Olympia"]}}
```

### [](#sum)sum

Returns the sum of numeric values in an array.

#### [](#examples-91)Examples

```bloblang
root.sum = this.foo.sum()

# In:  {"foo":[3,8,4]}
# Out: {"sum":15}
```

Works with decimals:

```bloblang
root.total = this.prices.sum()

# In:  {"prices":[10.5,20.25,5.00]}
# Out: {"total":35.75}
```

### [](#unique)unique

Returns an array with duplicate elements removed.

#### [](#parameters-70)Parameters

| Name | Type | Description |
| --- | --- | --- |
| emit (optional) | query expression | An optional query that can be used in order to yield a value for each element to determine uniqueness. |

#### [](#examples-92)Examples

```bloblang
root.uniques = this.foo.unique()

# In:  {"foo":["a","b","a","c"]}
# Out: {"uniques":["a","b","c"]}
```

Use a query to determine uniqueness by a field:

```bloblang
root.unique_users = this.users.unique(u -> u.id)

# In:  {"users":[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"},{"id":1,"name":"Alice Duplicate"}]}
# Out: {"unique_users":[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}]}
```

### [](#values)values

Returns an array of all values from an object.

#### [](#examples-93)Examples

```bloblang
root.foo_vals = this.foo.values().sort()

# In:  {"foo":{"bar":1,"baz":2}}
# Out: {"foo_vals":[1,2]}
```

Find max value in object:

```bloblang
root.max = this.scores.values().sort().index(-1)

# In:  {"scores":{"player1":85,"player2":92,"player3":78}}
# Out: {"max":92}
```

### [](#with)with

Returns an object where all but one or more [field path](https://docs.redpanda.com/redpanda-connect/configuration/field_paths/) arguments are removed. Each path specifies a specific field to be retained from the input object, allowing for nested fields.

If a key within a nested path does not exist then it is ignored.

#### [](#examples-94)Examples

```bloblang
root = this.with("inner.a","inner.c","d")

# In:  {"inner":{"a":"first","b":"second","c":"third"},"d":"fourth","e":"fifth"}
# Out: {"d":"fourth","inner":{"a":"first","c":"third"}}
```

### [](#without)without

Returns an object with specified keys removed.

#### [](#examples-95)Examples

```bloblang
root = this.without("inner.a","inner.c","d")

# In:  {"inner":{"a":"first","b":"second","c":"third"},"d":"fourth","e":"fifth"}
# Out: {"e":"fifth","inner":{"b":"second"}}
```

Remove sensitive fields:

```bloblang
root = this.without("password","ssn","creditCard")

# In:  {"username":"alice","password":"secret","email":"alice@example.com","ssn":"123-45-6789"}
# Out: {"email":"alice@example.com","username":"alice"}
```

### [](#zip)zip

Zip an array value with one or more argument arrays. Each array must match in length.

#### [](#examples-96)Examples

```bloblang
root.foo = this.foo.zip(this.bar, this.baz)

# In:  {"foo":["a","b","c"],"bar":[1,2,3],"baz":[4,5,6]}
# Out: {"foo":[["a",1,4],["b",2,5],["c",3,6]]}
```

## [](#parsing)Parsing

### [](#bloblang)bloblang

Executes an argument Bloblang mapping on the target. This method can be used in order to execute dynamic mappings. Imports and functions that interact with the environment, such as `file` and `env`, or that access message information directly, such as `content` or `json`, are not enabled for dynamic Bloblang mappings.

#### [](#parameters-71)Parameters

| Name | Type | Description |
| --- | --- | --- |
| mapping | string | The mapping to execute. |

#### [](#examples-97)Examples

```bloblang
root.body = this.body.bloblang(this.mapping)

# In:  {"body":{"foo":"hello world"},"mapping":"root.foo = this.foo.uppercase()"}
# Out: {"body":{"foo":"HELLO WORLD"}}

# In:  {"body":{"foo":"hello world 2"},"mapping":"root.foo = this.foo.capitalize()"}
# Out: {"body":{"foo":"Hello World 2"}}
```

### [](#format_json)format_json

Formats a value as a JSON string.

#### [](#parameters-72)Parameters

| Name | Type | Description |
| --- | --- | --- |
| indent | string | Indentation string. Each element in a JSON object or array will begin on a new, indented line followed by one or more copies of indent according to the indentation nesting. |
| no_indent | bool | Disable indentation. |
| escape_html | bool | Escape problematic HTML characters. |

#### [](#examples-98)Examples

```bloblang
root = this.doc.format_json()

# In:  {"doc":{"foo":"bar"}}
# Out: {
    "foo": "bar"
}
```

Pass a string to the `indent` parameter in order to customise the indentation:

```bloblang
root = this.format_json("  ")

# In:  {"doc":{"foo":"bar"}}
# Out: {
  "doc": {
    "foo": "bar"
  }
}
```

Use the `.string()` method in order to coerce the result into a string:

```bloblang
root.doc = this.doc.format_json().string()

# In:  {"doc":{"foo":"bar"}}
# Out: {"doc":"{\n    \"foo\": \"bar\"\n}"}
```

Set the `no_indent` parameter to true to disable indentation. The result is equivalent to calling `bytes()`:

```bloblang
root = this.doc.format_json(no_indent: true)

# In:  {"doc":{"foo":"bar"}}
# Out: {"foo":"bar"}
```

Escapes problematic HTML characters:

```bloblang
root = this.doc.format_json()

# In:  {"doc":{"email":"foo&bar@benthos.dev","name":"foo>bar"}}
# Out: {
    "email": "foo\u0026bar@benthos.dev",
    "name": "foo\u003ebar"
}
```

Set the `escape_html` parameter to false to disable escaping of problematic HTML characters:

```bloblang
root = this.doc.format_json(escape_html: false)

# In:  {"doc":{"email":"foo&bar@benthos.dev","name":"foo>bar"}}
# Out: {
    "email": "foo&bar@benthos.dev",
    "name": "foo>bar"
}
```

### [](#format_msgpack)format_msgpack

Serializes structured data into MessagePack binary format. MessagePack is a compact binary serialization that is faster and more space-efficient than JSON, making it ideal for network transmission and storage of structured data. Returns a byte array that can be further encoded as needed.

#### [](#examples-99)Examples

Serialize object to MessagePack and encode as hex for transmission:

```bloblang
root = this.format_msgpack().encode("hex")

# In:  {"foo":"bar"}
# Out: 81a3666f6fa3626172
```

Serialize data to MessagePack and base64 encode for embedding in JSON:

```bloblang
root.msgpack_payload = this.data.format_msgpack().encode("base64")

# In:  {"data":{"foo":"bar"}}
# Out: {"msgpack_payload":"gaNmb2+jYmFy"}
```

### [](#format_xml)format_xml

Serializes an object into an XML document. Converts structured data to XML format with support for attributes (prefixed with hyphen), custom indentation, and configurable root element. Returns XML as a byte array.

#### [](#parameters-73)Parameters

| Name | Type | Description |
| --- | --- | --- |
| indent | string | String to use for each level of indentation (default is 4 spaces). Each nested XML element will be indented by this string. |
| no_indent | bool | Disable indentation and newlines to produce compact XML on a single line. |
| root_tag (optional) | string | Custom name for the root XML element. By default, the root element name is derived from the first key in the object. |

#### [](#examples-100)Examples

Serialize object to pretty-printed XML with default indentation:

```bloblang
root = this.format_xml()

# In:  {"foo":{"bar":{"baz":"foo bar baz"}}}
# Out: <foo>
    <bar>
        <baz>foo bar baz</baz>
    </bar>
</foo>
```

Create compact XML without indentation for smaller message size:

```bloblang
root = this.format_xml(no_indent: true)

# In:  {"foo":{"bar":{"baz":"foo bar baz"}}}
# Out: <foo><bar><baz>foo bar baz</baz></bar></foo>
```

### [](#format_yaml)format_yaml

Formats a value as a YAML string.

#### [](#examples-101)Examples

```bloblang
root = this.doc.format_yaml()

# In:  {"doc":{"foo":"bar"}}
# Out: foo: bar
```

Use the `.string()` method in order to coerce the result into a string:

```bloblang
root.doc = this.doc.format_yaml().string()

# In:  {"doc":{"foo":"bar"}}
# Out: {"doc":"foo: bar\n"}
```

### [](#infer_schema)infer_schema

Attempt to infer the schema of a given value. The resulting schema can then be used as an input to schema conversion and enforcement methods.

### [](#parse_csv)parse_csv

Parses CSV data into an array.

#### [](#parameters-74)Parameters

| Name | Type | Description |
| --- | --- | --- |
| parse_header_row | bool | Whether to reference the first row as a header row. If set to true the output structure for messages will be an object where field keys are determined by the header row. Otherwise, the output will be an array of row arrays. |
| delimiter | string | The delimiter to use for splitting values in each record. It must be a single character. |
| lazy_quotes | bool | If set to true, a quote may appear in an unquoted field and a non-doubled quote may appear in a quoted field. |

#### [](#examples-102)Examples

Parses CSV data with a header row:

```bloblang
root.orders = this.orders.parse_csv()

# In:  {"orders":"foo,bar\nfoo 1,bar 1\nfoo 2,bar 2"}
# Out: {"orders":[{"bar":"bar 1","foo":"foo 1"},{"bar":"bar 2","foo":"foo 2"}]}
```

Parses CSV data without a header row:

```bloblang
root.orders = this.orders.parse_csv(false)

# In:  {"orders":"foo 1,bar 1\nfoo 2,bar 2"}
# Out: {"orders":[["foo 1","bar 1"],["foo 2","bar 2"]]}
```

Parses CSV data delimited by dots:

```bloblang
root.orders = this.orders.parse_csv(delimiter:".")

# In:  {"orders":"foo.bar\nfoo 1.bar 1\nfoo 2.bar 2"}
# Out: {"orders":[{"bar":"bar 1","foo":"foo 1"},{"bar":"bar 2","foo":"foo 2"}]}
```

Parses CSV data containing a quote in an unquoted field:

```bloblang
root.orders = this.orders.parse_csv(lazy_quotes:true)

# In:  {"orders":"foo,bar\nfoo 1,bar 1\nfoo\" \"2,bar\" \"2"}
# Out: {"orders":[{"bar":"bar 1","foo":"foo 1"},{"bar":"bar\" \"2","foo":"foo\" \"2"}]}
```

### [](#parse_form_url_encoded)parse_form_url_encoded

Attempts to parse a url-encoded query string (from an x-www-form-urlencoded request body) and returns a structured result.

#### [](#examples-103)Examples

```bloblang
root.values = this.body.parse_form_url_encoded()

# In:  {"body":"noise=meow&animal=cat&fur=orange&fur=fluffy"}
# Out: {"values":{"animal":"cat","fur":["orange","fluffy"],"noise":"meow"}}
```

### [](#parse_json)parse_json

Parses a JSON string into a structured value.

#### [](#parameters-75)Parameters

| Name | Type | Description |
| --- | --- | --- |
| use_number (optional) | bool | An optional flag that when set makes parsing numbers as json.Number instead of the default float64. |

#### [](#examples-104)Examples

```bloblang
root.doc = this.doc.parse_json()

# In:  {"doc":"{\"foo\":\"bar\"}"}
# Out: {"doc":{"foo":"bar"}}
```

```bloblang
root.doc = this.doc.parse_json(use_number: true)

# In:  {"doc":"{\"foo\":\"11380878173205700000000000000000000000000000000\"}"}
# Out: {"doc":{"foo":"11380878173205700000000000000000000000000000000"}}
```

### [](#parse_logfmt)parse_logfmt

Parses logfmt formatted data into an object.

#### [](#examples-105)Examples

```bloblang
root = this.msg.parse_logfmt()

# In:  {"msg":"level=info msg=\"hello world\" dur=1.5s"}
# Out: {"dur":"1.5s","level":"info","msg":"hello world"}
```

### [](#parse_msgpack)parse_msgpack

Parses MessagePack binary data into a structured object. MessagePack is an efficient binary serialization format that is more compact than JSON while maintaining similar data structures. Commonly used for high-performance APIs and data interchange between microservices.

#### [](#examples-106)Examples

Parse MessagePack data from hex-encoded content:

```bloblang
root = content().decode("hex").parse_msgpack()

# In:  81a3666f6fa3626172
# Out: {"foo":"bar"}
```

Parse MessagePack from base64-encoded field:

```bloblang
root.decoded = this.msgpack_data.decode("base64").parse_msgpack()

# In:  {"msgpack_data":"gaNmb2+jYmFy"}
# Out: {"decoded":{"foo":"bar"}}
```

### [](#parse_parquet)parse_parquet

Parses Apache Parquet binary data into an array of objects. Parquet is a columnar storage format optimized for analytics, commonly used with big data systems like Apache Spark, Hive, and cloud data warehouses. Each row in the Parquet file becomes an object in the output array.

#### [](#parameters-76)Parameters

| Name | Type | Description |
| --- | --- | --- |
| byte_array_as_string | bool | Deprecated: This parameter is no longer used. |

#### [](#examples-107)Examples

Parse Parquet file data into structured objects:

```bloblang
root.records = content().parse_parquet()
```

Process Parquet data from a field and extract specific columns:

```bloblang
root.users = this.parquet_data.parse_parquet().map_each(row -> {"name": row.name, "email": row.email})
```

### [](#parse_url)parse_url

Attempts to parse a URL from a string value, returning a structured result that describes the various facets of the URL. The fields returned within the structured result roughly follow [https://pkg.go.dev/net/url#URL](https://pkg.go.dev/net/url#URL), and may be expanded in future in order to present more information.

#### [](#examples-108)Examples

```bloblang
root.foo_url = this.foo_url.parse_url()

# In:  {"foo_url":"https://docs.redpanda.com/redpanda-connect/guides/bloblang/about/"}
# Out: {"foo_url":{"fragment":"","host":"docs.redpanda.com","opaque":"","path":"/redpanda-connect/guides/bloblang/about/","raw_fragment":"","raw_path":"","raw_query":"","scheme":"https"}}
```

```bloblang
root.username = this.url.parse_url().user.name | "unknown"

# In:  {"url":"amqp://foo:bar@127.0.0.1:5672/"}
# Out: {"username":"foo"}

# In:  {"url":"redis://localhost:6379"}
# Out: {"username":"unknown"}
```

### [](#parse_xml)parse_xml

Parses an XML document into a structured object. Converts XML elements to JSON-like objects following these rules:

-   Element attributes are prefixed with a hyphen (e.g., `-id` for an `id` attribute)

-   Elements with both attributes and text content store the text in a `#text` field

-   Repeated elements become arrays

-   XML comments, directives, and processing instructions are ignored

-   Optionally cast numeric and boolean strings to their proper types.


#### [](#parameters-77)Parameters

| Name | Type | Description |
| --- | --- | --- |
| cast (optional) | bool | Whether to automatically cast numeric and boolean string values to their proper types. When false, all values remain as strings. |

#### [](#examples-109)Examples

Parse XML document into object structure:

```bloblang
root.doc = this.doc.parse_xml()

# In:  {"doc":"<root><title>This is a title</title><content>This is some content</content></root>"}
# Out: {"doc":{"root":{"content":"This is some content","title":"This is a title"}}}
```

Parse XML with type casting enabled to convert strings to numbers and booleans:

```bloblang
root.doc = this.doc.parse_xml(cast: true)

# In:  {"doc":"<root><title>This is a title</title><number id=\"99\">123</number><bool>True</bool></root>"}
# Out: {"doc":{"root":{"bool":true,"number":{"#text":123,"-id":99},"title":"This is a title"}}}
```

### [](#parse_yaml)parse_yaml

Parses a YAML string into a structured value.

#### [](#examples-110)Examples

```bloblang
root.doc = this.doc.parse_yaml()

# In:  {"doc":"foo: bar"}
# Out: {"doc":{"foo":"bar"}}
```

## [](#regular-expressions)Regular expressions

### [](#re_find_all)re_find_all

Finds all matches of a regular expression in a string.

#### [](#parameters-78)Parameters

| Name | Type | Description |
| --- | --- | --- |
| pattern | string | The pattern to match against. |

#### [](#examples-111)Examples

```bloblang
root.matches = this.value.re_find_all("a.")

# In:  {"value":"paranormal"}
# Out: {"matches":["ar","an","al"]}
```

```bloblang
root.numbers = this.text.re_find_all("[0-9]+")

# In:  {"text":"I have 2 apples and 15 oranges"}
# Out: {"numbers":["2","15"]}
```

### [](#re_find_all_object)re_find_all_object

Finds all regex matches as objects with named groups.

#### [](#parameters-79)Parameters

| Name | Type | Description |
| --- | --- | --- |
| pattern | string | The pattern to match against. |

#### [](#examples-112)Examples

```bloblang
root.matches = this.value.re_find_all_object("a(?P<foo>x*)b")

# In:  {"value":"-axxb-ab-"}
# Out: {"matches":[{"0":"axxb","foo":"xx"},{"0":"ab","foo":""}]}
```

```bloblang
root.matches = this.value.re_find_all_object("(?m)(?P<key>\\w+):\\s+(?P<value>\\w+)$")

# In:  {"value":"option1: value1\noption2: value2\noption3: value3"}
# Out: {"matches":[{"0":"option1: value1","key":"option1","value":"value1"},{"0":"option2: value2","key":"option2","value":"value2"},{"0":"option3: value3","key":"option3","value":"value3"}]}
```

### [](#re_find_all_submatch)re_find_all_submatch

Finds all regex matches with capture groups.

#### [](#parameters-80)Parameters

| Name | Type | Description |
| --- | --- | --- |
| pattern | string | The pattern to match against. |

#### [](#examples-113)Examples

```bloblang
root.matches = this.value.re_find_all_submatch("a(x*)b")

# In:  {"value":"-axxb-ab-"}
# Out: {"matches":[["axxb","xx"],["ab",""]]}
```

```bloblang
root.emails = this.text.re_find_all_submatch("(\\w+)@(\\w+\\.\\w+)")

# In:  {"text":"Contact: alice@example.com or bob@test.org"}
# Out: {"emails":[["alice@example.com","alice","example.com"],["bob@test.org","bob","test.org"]]}
```

### [](#re_find_object)re_find_object

Finds the first regex match as an object with named groups.

#### [](#parameters-81)Parameters

| Name | Type | Description |
| --- | --- | --- |
| pattern | string | The pattern to match against. |

#### [](#examples-114)Examples

```bloblang
root.matches = this.value.re_find_object("a(?P<foo>x*)b")

# In:  {"value":"-axxb-ab-"}
# Out: {"matches":{"0":"axxb","foo":"xx"}}
```

```bloblang
root.matches = this.value.re_find_object("(?P<key>\\w+):\\s+(?P<value>\\w+)")

# In:  {"value":"option1: value1"}
# Out: {"matches":{"0":"option1: value1","key":"option1","value":"value1"}}
```

### [](#re_match)re_match

Tests if a string matches a regular expression.

#### [](#parameters-82)Parameters

| Name | Type | Description |
| --- | --- | --- |
| pattern | string | The pattern to match against. |

#### [](#examples-115)Examples

```bloblang
root.matches = this.value.re_match("[0-9]")

# In:  {"value":"there are 10 puppies"}
# Out: {"matches":true}

# In:  {"value":"there are ten puppies"}
# Out: {"matches":false}
```

### [](#re_replace)re_replace

Replaces all regex matches with a replacement string that can reference capture groups using `$1`, `$2`, etc. Use for pattern-based transformations or data reformatting.

#### [](#parameters-83)Parameters

| Name | Type | Description |
| --- | --- | --- |
| pattern | string | The pattern to match against. |
| value | string | The value to replace with. |

### [](#re_replace_all)re_replace_all

Replaces all regex matches with a replacement string.

#### [](#parameters-84)Parameters

| Name | Type | Description |
| --- | --- | --- |
| pattern | string | The pattern to match against. |
| value | string | The value to replace with. |

#### [](#examples-116)Examples

```bloblang
root.new_value = this.value.re_replace_all("ADD ([0-9]+)","+($1)")

# In:  {"value":"foo ADD 70"}
# Out: {"new_value":"foo +(70)"}
```

```bloblang
root.masked = this.email.re_replace_all("(\\w{2})\\w+@", "$1***@")

# In:  {"email":"alice@example.com"}
# Out: {"masked":"al***@example.com"}
```

## [](#sql)SQL

### [](#vector)vector

Converts an array of numbers into a vector type suitable for insertion into SQL databases with vector/embedding support. This is commonly used with PostgreSQL’s pgvector extension for storing and querying machine learning embeddings, enabling similarity search and vector operations in your database.

#### [](#examples-117)Examples

Convert embeddings array to vector for pgvector storage:

```bloblang
root.embedding = this.embeddings.vector()
root.text = this.text
```

Process ML model output into database-ready vector format:

```bloblang
root.doc_id = this.id
root.vector_embedding = this.model_output.map_each(num -> num.number()).vector()
```

## [](#string-manipulation)String manipulation

### [](#capitalize)capitalize

Converts a string to title case with Unicode letter mapping.

#### [](#examples-118)Examples

```bloblang
root.title = this.title.capitalize()

# In:  {"title":"the foo bar"}
# Out: {"title":"The Foo Bar"}
```

```bloblang
root.name = this.name.capitalize()

# In:  {"name":"alice smith"}
# Out: {"name":"Alice Smith"}
```

### [](#compare_argon2)compare_argon2

Checks whether a string matches a hashed secret using Argon2.

#### [](#parameters-85)Parameters

| Name | Type | Description |
| --- | --- | --- |
| hashed_secret | string | The hashed secret to compare with the input. This must be a fully-qualified string which encodes the Argon2 options used to generate the hash. |

#### [](#examples-119)Examples

```bloblang
root.match = this.secret.compare_argon2("$argon2id$v=19$m=4096,t=3,p=1$c2FsdHktbWNzYWx0ZmFjZQ$RMUMwgtS32/mbszd+ke4o4Ej1jFpYiUqY6MHWa69X7Y")

# In:  {"secret":"there-are-many-blobs-in-the-sea"}
# Out: {"match":true}
```

```bloblang
root.match = this.secret.compare_argon2("$argon2id$v=19$m=4096,t=3,p=1$c2FsdHktbWNzYWx0ZmFjZQ$RMUMwgtS32/mbszd+ke4o4Ej1jFpYiUqY6MHWa69X7Y")

# In:  {"secret":"will-i-ever-find-love"}
# Out: {"match":false}
```

### [](#compare_bcrypt)compare_bcrypt

Checks whether a string matches a hashed secret using bcrypt.

#### [](#parameters-86)Parameters

| Name | Type | Description |
| --- | --- | --- |
| hashed_secret | string | The hashed secret value to compare with the input. |

#### [](#examples-120)Examples

```bloblang
root.match = this.secret.compare_bcrypt("$2y$10$Dtnt5NNzVtMCOZONT705tOcS8It6krJX8bEjnDJnwxiFKsz1C.3Ay")

# In:  {"secret":"there-are-many-blobs-in-the-sea"}
# Out: {"match":true}
```

```bloblang
root.match = this.secret.compare_bcrypt("$2y$10$Dtnt5NNzVtMCOZONT705tOcS8It6krJX8bEjnDJnwxiFKsz1C.3Ay")

# In:  {"secret":"will-i-ever-find-love"}
# Out: {"match":false}
```

### [](#contains-2)contains

Tests if an array or object contains a value.

#### [](#parameters-87)Parameters

| Name | Type | Description |
| --- | --- | --- |
| value | unknown | A value to test against elements of the target. |

#### [](#examples-121)Examples

```bloblang
root.has_foo = this.thing.contains("foo")

# In:  {"thing":["this","foo","that"]}
# Out: {"has_foo":true}

# In:  {"thing":["this","bar","that"]}
# Out: {"has_foo":false}
```

```bloblang
root.has_bar = this.thing.contains(20)

# In:  {"thing":[10.3,20.0,"huh",3]}
# Out: {"has_bar":true}

# In:  {"thing":[2,3,40,67]}
# Out: {"has_bar":false}
```

```bloblang
root.has_foo = this.thing.contains("foo")

# In:  {"thing":"this foo that"}
# Out: {"has_foo":true}

# In:  {"thing":"this bar that"}
# Out: {"has_foo":false}
```

### [](#escape_html)escape_html

Escapes HTML special characters.

#### [](#examples-122)Examples

```bloblang
root.escaped = this.value.escape_html()

# In:  {"value":"foo & bar"}
# Out: {"escaped":"foo &amp; bar"}
```

```bloblang
root.safe_html = this.user_input.escape_html()

# In:  {"user_input":"<script>alert('xss')</script>"}
# Out: {"safe_html":"&lt;script&gt;alert(&#39;xss&#39;)&lt;/script&gt;"}
```

### [](#escape_url_path)escape_url_path

Escapes a string for use in URL paths.

#### [](#examples-123)Examples

```bloblang
root.escaped = this.value.escape_url_path()

# In:  {"value":"foo & bar"}
# Out: {"escaped":"foo%20&%20bar"}
```

```bloblang
root.url = "https://example.com/docs/" + this.path.escape_url_path()

# In:  {"path":"my document.pdf"}
# Out: {"url":"https://example.com/docs/my%20document.pdf"}
```

### [](#escape_url_query)escape_url_query

Escapes a string for use in URL query parameters.

#### [](#examples-124)Examples

```bloblang
root.escaped = this.value.escape_url_query()

# In:  {"value":"foo & bar"}
# Out: {"escaped":"foo+%26+bar"}
```

```bloblang
root.url = "https://example.com?search=" + this.query.escape_url_query()

# In:  {"query":"hello world!"}
# Out: {"url":"https://example.com?search=hello+world%21"}
```

### [](#filepath_join)filepath_join

Joins filepath components into a single path.

#### [](#examples-125)Examples

```bloblang
root.path = this.path_elements.filepath_join()

# In:  {"path_elements":["/foo/","bar.txt"]}
# Out: {"path":"/foo/bar.txt"}
```

### [](#filepath_split)filepath_split

Splits a filepath into directory and filename components.

#### [](#examples-126)Examples

```bloblang
root.path_sep = this.path.filepath_split()

# In:  {"path":"/foo/bar.txt"}
# Out: {"path_sep":["/foo/","bar.txt"]}

# In:  {"path":"baz.txt"}
# Out: {"path_sep":["","baz.txt"]}
```

### [](#format)format

Formats a value using a specified format string.

#### [](#examples-127)Examples

```bloblang
root.foo = "%s(%v): %v".format(this.name, this.age, this.fingers)

# In:  {"name":"lance","age":37,"fingers":13}
# Out: {"foo":"lance(37): 13"}
```

```bloblang
root.message = "User %s has %v points".format(this.username, this.score)

# In:  {"username":"alice","score":100}
# Out: {"message":"User alice has 100 points"}
```

### [](#has_prefix)has_prefix

Tests if a string starts with a specified prefix.

#### [](#parameters-88)Parameters

| Name | Type | Description |
| --- | --- | --- |
| value | string | The string to test. |

#### [](#examples-128)Examples

```bloblang
root.t1 = this.v1.has_prefix("foo")
root.t2 = this.v2.has_prefix("foo")

# In:  {"v1":"foobar","v2":"barfoo"}
# Out: {"t1":true,"t2":false}
```

### [](#has_suffix)has_suffix

Tests if a string ends with a specified suffix.

#### [](#parameters-89)Parameters

| Name | Type | Description |
| --- | --- | --- |
| value | string | The string to test. |

#### [](#examples-129)Examples

```bloblang
root.t1 = this.v1.has_suffix("foo")
root.t2 = this.v2.has_suffix("foo")

# In:  {"v1":"foobar","v2":"barfoo"}
# Out: {"t1":false,"t2":true}
```

### [](#index_of)index_of

Returns the index of the first occurrence of a substring.

#### [](#parameters-90)Parameters

| Name | Type | Description |
| --- | --- | --- |
| value | string | A string to search for. |

#### [](#examples-130)Examples

```bloblang
root.index = this.thing.index_of("bar")

# In:  {"thing":"foobar"}
# Out: {"index":3}
```

```bloblang
root.index = content().index_of("meow")

# In:  the cat meowed, the dog woofed
# Out: {"index":8}
```

### [](#length-2)length

Returns the length of an array, object, or string.

#### [](#examples-131)Examples

```bloblang
root.foo_len = this.foo.length()

# In:  {"foo":"hello world"}
# Out: {"foo_len":11}
```

```bloblang
root.foo_len = this.foo.length()

# In:  {"foo":["first","second"]}
# Out: {"foo_len":2}

# In:  {"foo":{"first":"bar","second":"baz"}}
# Out: {"foo_len":2}
```

### [](#lowercase)lowercase

Converts all letters in a string to lowercase.

#### [](#examples-132)Examples

```bloblang
root.foo = this.foo.lowercase()

# In:  {"foo":"HELLO WORLD"}
# Out: {"foo":"hello world"}
```

```bloblang
root.email = this.user_email.lowercase()

# In:  {"user_email":"User@Example.COM"}
# Out: {"email":"user@example.com"}
```

### [](#quote)quote

Wraps a string in double quotes and escapes special characters.

#### [](#examples-133)Examples

```bloblang
root.quoted = this.thing.quote()

# In:  {"thing":"foo\nbar"}
# Out: {"quoted":"\"foo\\nbar\""}
```

```bloblang
root.literal = this.text.quote()

# In:  {"text":"hello\tworld"}
# Out: {"literal":"\"hello\\tworld\""}
```

### [](#repeat)repeat

Creates a string by repeating the input a specified number of times.

#### [](#parameters-91)Parameters

| Name | Type | Description |
| --- | --- | --- |
| count | integer | The number of times to repeat the string. |

#### [](#examples-134)Examples

```bloblang
root.repeated = this.name.repeat(3)
root.not_repeated = this.name.repeat(0)

# In:  {"name":"bob"}
# Out: {"not_repeated":"","repeated":"bobbobbob"}
```

```bloblang
root.separator = "-".repeat(10)

# In:  {}
# Out: {"separator":"----------"}
```

### [](#replace)replace

Replaces all occurrences of a substring with another string. Use for text transformation, cleaning data, or normalizing strings.

#### [](#parameters-92)Parameters

| Name | Type | Description |
| --- | --- | --- |
| old | string | A string to match against. |
| new | string | A string to replace with. |

### [](#replace_all)replace_all

Replaces all occurrences of a substring with another.

#### [](#parameters-93)Parameters

| Name | Type | Description |
| --- | --- | --- |
| old | string | A string to match against. |
| new | string | A string to replace with. |

#### [](#examples-135)Examples

```bloblang
root.new_value = this.value.replace_all("foo","dog")

# In:  {"value":"The foo ate my homework"}
# Out: {"new_value":"The dog ate my homework"}
```

```bloblang
root.clean = this.text.replace_all("  ", " ")

# In:  {"text":"hello  world  foo"}
# Out: {"clean":"hello world foo"}
```

### [](#replace_all_many)replace_all_many

Performs multiple find-and-replace operations in sequence.

#### [](#parameters-94)Parameters

| Name | Type | Description |
| --- | --- | --- |
| values | array | An array of values, each even value will be replaced with the following odd value. |

#### [](#examples-136)Examples

```bloblang
root.new_value = this.value.replace_all_many([
  "<b>", "&lt;b&gt;",
  "</b>", "&lt;/b&gt;",
  "<i>", "&lt;i&gt;",
  "</i>", "&lt;/i&gt;",
])

# In:  {"value":"<i>Hello</i> <b>World</b>"}
# Out: {"new_value":"&lt;i&gt;Hello&lt;/i&gt; &lt;b&gt;World&lt;/b&gt;"}
```

### [](#replace_many)replace_many

Performs multiple find-and-replace operations in sequence using an array of `[old, new]` pairs. More efficient than chaining multiple `replace_all` calls. Use for bulk text transformations.

#### [](#parameters-95)Parameters

| Name | Type | Description |
| --- | --- | --- |
| values | array | An array of values, each even value will be replaced with the following odd value. |

### [](#reverse)reverse

Reverses the order of characters in a string.

#### [](#examples-137)Examples

```bloblang
root.reversed = this.thing.reverse()

# In:  {"thing":"backwards"}
# Out: {"reversed":"sdrawkcab"}
```

```bloblang
root = content().reverse()

# In:  {"thing":"backwards"}
# Out: }"sdrawkcab":"gniht"{
```

### [](#slice-2)slice

Extracts a portion of an array or string.

#### [](#parameters-96)Parameters

| Name | Type | Description |
| --- | --- | --- |
| low | integer | The low bound, which is the first element of the selection, or if negative selects from the end. |
| high (optional) | integer | An optional high bound. |

#### [](#examples-138)Examples

```bloblang
root.beginning = this.value.slice(0, 2)
root.end = this.value.slice(4)

# In:  {"value":"foo bar"}
# Out: {"beginning":"fo","end":"bar"}
```

A negative low index can be used, indicating an offset from the end of the sequence. If the low index is greater than the length of the sequence then an empty result is returned:

```bloblang
root.last_chunk = this.value.slice(-4)
root.the_rest = this.value.slice(0, -4)

# In:  {"value":"foo bar"}
# Out: {"last_chunk":" bar","the_rest":"foo"}
```

```bloblang
root.beginning = this.value.slice(0, 2)
root.end = this.value.slice(4)

# In:  {"value":["foo","bar","baz","buz","bev"]}
# Out: {"beginning":["foo","bar"],"end":["bev"]}
```

A negative low index can be used, indicating an offset from the end of the sequence. If the low index is greater than the length of the sequence then an empty result is returned:

```bloblang
root.last_chunk = this.value.slice(-2)
root.the_rest = this.value.slice(0, -2)

# In:  {"value":["foo","bar","baz","buz","bev"]}
# Out: {"last_chunk":["buz","bev"],"the_rest":["foo","bar","baz"]}
```

### [](#slug)slug

Converts a string into a URL-friendly slug by replacing spaces with hyphens, removing special characters, and converting to lowercase. Supports multiple languages for proper transliteration of non-ASCII characters.

#### [](#parameters-97)Parameters

| Name | Type | Description |
| --- | --- | --- |
| lang (optional) | string |  |

#### [](#examples-139)Examples

Create a URL-friendly slug from a string with special characters:

```bloblang
root.slug = this.title.slug()

# In:  {"title":"Hello World! Welcome to Redpanda Connect"}
# Out: {"slug":"hello-world-welcome-to-redpanda-connect"}
```

Create a slug preserving French language rules:

```bloblang
root.slug = this.title.slug("fr")

# In:  {"title":"Café & Restaurant"}
# Out: {"slug":"cafe-et-restaurant"}
```

### [](#split)split

Splits a string into an array of substrings.

#### [](#parameters-98)Parameters

| Name | Type | Description |
| --- | --- | --- |
| delimiter | string | The delimiter to split with. |
| empty_as_null | bool | To treat empty substrings as null values |

#### [](#examples-140)Examples

```bloblang
root.new_value = this.value.split(",")

# In:  {"value":"foo,bar,baz"}
# Out: {"new_value":["foo","bar","baz"]}
```

```bloblang
root.new_value = this.value.split(",", true)

# In:  {"value":"foo,,qux"}
# Out: {"new_value":["foo",null,"qux"]}
```

```bloblang
root.words = this.sentence.split(" ")

# In:  {"sentence":"hello world from bloblang"}
# Out: {"words":["hello","world","from","bloblang"]}
```

### [](#strip_html)strip_html

Removes HTML tags from a string, returning only the text content. Useful for extracting plain text from HTML documents, sanitizing user input, or preparing content for text analysis. Optionally preserves specific HTML elements while stripping all others.

#### [](#parameters-99)Parameters

| Name | Type | Description |
| --- | --- | --- |
| preserve (optional) | unknown | Optional array of HTML element names to preserve (e.g., ["strong", "em", "a"]). All other HTML tags will be removed. |

#### [](#examples-141)Examples

Extract plain text from HTML content:

```bloblang
root.plain_text = this.html_content.strip_html()

# In:  {"html_content":"<p>Welcome to <strong>Redpanda Connect</strong>!</p>"}
# Out: {"plain_text":"Welcome to Redpanda Connect!"}
```

Preserve specific HTML elements while removing others:

```bloblang
root.sanitized = this.html.strip_html(["strong", "em"])

# In:  {"html":"<div><p>Some <strong>bold</strong> and <em>italic</em> text with a <script>alert('xss')</script></p></div>"}
# Out: {"sanitized":"Some <strong>bold</strong> and <em>italic</em> text with a "}
```

### [](#trim)trim

Removes leading and trailing characters from a string.

#### [](#parameters-100)Parameters

| Name | Type | Description |
| --- | --- | --- |
| cutset (optional) | string | An optional string of characters to trim from the target value. |

#### [](#examples-142)Examples

```bloblang
root.title = this.title.trim("!?")
root.description = this.description.trim()

# In:  {"description":"  something happened and its amazing! ","title":"!!!watch out!?"}
# Out: {"description":"something happened and its amazing!","title":"watch out"}
```

### [](#trim_prefix)trim_prefix

Removes a specified prefix from the beginning of a string.

#### [](#parameters-101)Parameters

| Name | Type | Description |
| --- | --- | --- |
| prefix | string | The leading prefix substring to trim from the string. |

#### [](#examples-143)Examples

```bloblang
root.name = this.name.trim_prefix("foobar_")
root.description = this.description.trim_prefix("foobar_")

# In:  {"description":"unchanged","name":"foobar_blobton"}
# Out: {"description":"unchanged","name":"blobton"}
```

### [](#trim_suffix)trim_suffix

Removes a specified suffix from the end of a string.

#### [](#parameters-102)Parameters

| Name | Type | Description |
| --- | --- | --- |
| suffix | string | The trailing suffix substring to trim from the string. |

#### [](#examples-144)Examples

```bloblang
root.name = this.name.trim_suffix("_foobar")
root.description = this.description.trim_suffix("_foobar")

# In:  {"description":"unchanged","name":"blobton_foobar"}
# Out: {"description":"unchanged","name":"blobton"}
```

### [](#unescape_html)unescape_html

Converts HTML entities back to their original characters.

#### [](#examples-145)Examples

```bloblang
root.unescaped = this.value.unescape_html()

# In:  {"value":"foo &amp; bar"}
# Out: {"unescaped":"foo & bar"}
```

```bloblang
root.text = this.html.unescape_html()

# In:  {"html":"&lt;p&gt;Hello &amp; goodbye&lt;/p&gt;"}
# Out: {"text":"<p>Hello & goodbye</p>"}
```

### [](#unescape_url_path)unescape_url_path

Unescapes URL path encoding.

#### [](#examples-146)Examples

```bloblang
root.unescaped = this.value.unescape_url_path()

# In:  {"value":"foo%20&%20bar"}
# Out: {"unescaped":"foo & bar"}
```

```bloblang
root.filename = this.path.unescape_url_path()

# In:  {"path":"my%20document.pdf"}
# Out: {"filename":"my document.pdf"}
```

### [](#unescape_url_query)unescape_url_query

Unescapes URL query parameter encoding.

#### [](#examples-147)Examples

```bloblang
root.unescaped = this.value.unescape_url_query()

# In:  {"value":"foo+%26+bar"}
# Out: {"unescaped":"foo & bar"}
```

```bloblang
root.search = this.param.unescape_url_query()

# In:  {"param":"hello+world%21"}
# Out: {"search":"hello world!"}
```

### [](#unicode_segments)unicode_segments

Splits text into segments based on Unicode text segmentation rules. Returns an array of strings representing individual graphemes (visual characters), words (including punctuation and whitespace), or sentences. Handles complex Unicode correctly, including emoji with skin tone modifiers and zero-width joiners.

#### [](#parameters-103)Parameters

| Name | Type | Description |
| --- | --- | --- |
| segmentation_type | string | Type of segmentation: "grapheme", "word", or "sentence" |

#### [](#examples-148)Examples

Split text into sentences (preserves trailing spaces):

```bloblang
root.sentences = this.text.unicode_segments("sentence")

# In:  {"text":"Hello world. How are you?"}
# Out: {"sentences":["Hello world. ","How are you?"]}
```

Split text into grapheme clusters (handles complex emoji correctly):

```bloblang
root.graphemes = this.emoji.unicode_segments("grapheme")

# In:  {"emoji":"👨‍👩‍👧‍👦❤️"}
# Out: {"graphemes":["👨‍👩‍👧‍👦","❤️"]}
```

### [](#unquote)unquote

Removes surrounding quotes and interprets escape sequences.

#### [](#examples-149)Examples

```bloblang
root.unquoted = this.thing.unquote()

# In:  {"thing":"\"foo\\nbar\""}
# Out: {"unquoted":"foo\nbar"}
```

```bloblang
root.text = this.literal.unquote()

# In:  {"literal":"\"hello\\tworld\""}
# Out: {"text":"hello\tworld"}
```

### [](#uppercase)uppercase

Converts all letters in a string to uppercase.

#### [](#examples-150)Examples

```bloblang
root.foo = this.foo.uppercase()

# In:  {"foo":"hello world"}
# Out: {"foo":"HELLO WORLD"}
```

```bloblang
root.code = this.product_code.uppercase()

# In:  {"product_code":"abc-123"}
# Out: {"code":"ABC-123"}
```

## [](#timestamp-manipulation)Timestamp manipulation

### [](#parse_duration)parse_duration

Parses a Go-style duration string into nanoseconds. A duration string is a signed sequence of decimal numbers with unit suffixes like "300ms", "-1.5h", or "2h45m". Valid units: "ns", "us" (or "µs"), "ms", "s", "m", "h".

#### [](#examples-151)Examples

Parse microseconds to nanoseconds:

```bloblang
root.delay_for_ns = this.delay_for.parse_duration()

# In:  {"delay_for":"50us"}
# Out: {"delay_for_ns":50000}
```

Parse hours to seconds:

```bloblang
root.delay_for_s = this.delay_for.parse_duration() / 1000000000

# In:  {"delay_for":"2h"}
# Out: {"delay_for_s":7200}
```

### [](#parse_duration_iso8601)parse_duration_iso8601

Parses an ISO 8601 duration string into nanoseconds. Format: "P\[n\]Y\[n\]M\[n\]DT\[n\]H\[n\]M\[n\]S" or "P\[n\]W". Example: "P3Y6M4DT12H30M5S" means 3 years, 6 months, 4 days, 12 hours, 30 minutes, 5 seconds. Supports fractional seconds with full precision (not just one decimal place).

#### [](#examples-152)Examples

Parse complex ISO 8601 duration to nanoseconds:

```bloblang
root.delay_for_ns = this.delay_for.parse_duration_iso8601()

# In:  {"delay_for":"P3Y6M4DT12H30M5S"}
# Out: {"delay_for_ns":110839937000000000}
```

Parse hours to seconds:

```bloblang
root.delay_for_s = this.delay_for.parse_duration_iso8601() / 1000000000

# In:  {"delay_for":"PT2H"}
# Out: {"delay_for_s":7200}
```

### [](#ts_add_iso8601)ts_add_iso8601

Adds an ISO 8601 duration to a timestamp with calendar-aware precision for years, months, and days. Useful when you need to add durations that account for variable month lengths or leap years.

#### [](#parameters-104)Parameters

| Name | Type | Description |
| --- | --- | --- |
| duration | string | Duration in ISO 8601 format (e.g., "P1Y2M3D" for 1 year, 2 months, 3 days) |

#### [](#examples-153)Examples

Add one year to a timestamp:

```bloblang
root.next_year = this.created_at.ts_add_iso8601("P1Y")

# In:  {"created_at":"2020-08-14T05:54:23Z"}
# Out: {"next_year":"2021-08-14T05:54:23Z"}
```

Add a complex duration with multiple units:

```bloblang
root.future_date = this.created_at.ts_add_iso8601("P1Y2M3DT4H5M6S")

# In:  {"created_at":"2020-01-01T00:00:00Z"}
# Out: {"future_date":"2021-03-04T04:05:06Z"}
```

### [](#ts_format)ts_format

Formats a timestamp as a string using Go’s reference time format. Defaults to RFC 3339 if no format specified. The format uses "Mon Jan 2 15:04:05 -0700 MST 2006" as a reference. Accepts unix timestamps (with decimal precision) or RFC 3339 strings. Use ts\_strftime for strftime-style formats.

#### [](#parameters-105)Parameters

| Name | Type | Description |
| --- | --- | --- |
| format | string | The output format using Go’s reference time. |
| tz (optional) | string | Optional timezone (e.g., 'UTC', 'America/New_York'). Defaults to input timezone or local time for unix timestamps. |

#### [](#examples-154)Examples

Format timestamp with custom format:

```bloblang
root.something_at = this.created_at.ts_format("2006-Jan-02 15:04:05")

# In:  {"created_at":"2020-08-14T11:50:26.371Z"}
# Out: {"something_at":"2020-Aug-14 11:50:26"}
```

Format unix timestamp with timezone specification:

```bloblang
root.something_at = this.created_at.ts_format(format: "2006-Jan-02 15:04:05", tz: "UTC")

# In:  {"created_at":1597405526}
# Out: {"something_at":"2020-Aug-14 11:45:26"}
```

### [](#ts_parse)ts_parse

Parses a timestamp string using Go’s reference time format and outputs a timestamp object. The format uses "Mon Jan 2 15:04:05 -0700 MST 2006" as a reference - show how this reference time would appear in your format. Use ts\_strptime for strftime-style formats instead.

#### [](#parameters-106)Parameters

| Name | Type | Description |
| --- | --- | --- |
| format | string | The format of the input string using Go’s reference time. |

#### [](#examples-155)Examples

Parse a date with abbreviated month name:

```bloblang
root.doc.timestamp = this.doc.timestamp.ts_parse("2006-Jan-02")

# In:  {"doc":{"timestamp":"2020-Aug-14"}}
# Out: {"doc":{"timestamp":"2020-08-14T00:00:00Z"}}
```

Parse a custom datetime format:

```bloblang
root.parsed = this.timestamp.ts_parse("Jan 2, 2006 at 3:04pm (MST)")

# In:  {"timestamp":"Aug 14, 2020 at 5:54am (UTC)"}
# Out: {"parsed":"2020-08-14T05:54:00Z"}
```

### [](#ts_round)ts_round

Rounds a timestamp to the nearest multiple of the specified duration. Halfway values round up. Accepts unix timestamps (seconds with optional decimal precision) or RFC 3339 formatted strings.

#### [](#parameters-107)Parameters

| Name | Type | Description |
| --- | --- | --- |
| duration | integer | A duration measured in nanoseconds to round by. |

#### [](#examples-156)Examples

Round timestamp to the nearest hour:

```bloblang
root.created_at_hour = this.created_at.ts_round("1h".parse_duration())

# In:  {"created_at":"2020-08-14T05:54:23Z"}
# Out: {"created_at_hour":"2020-08-14T06:00:00Z"}
```

Round timestamp to the nearest minute:

```bloblang
root.created_at_minute = this.created_at.ts_round("1m".parse_duration())

# In:  {"created_at":"2020-08-14T05:54:23Z"}
# Out: {"created_at_minute":"2020-08-14T05:54:00Z"}
```

### [](#ts_strftime)ts_strftime

Formats a timestamp as a string using strptime format specifiers (like %Y, %m, %d). Accepts unix timestamps (with decimal precision) or RFC 3339 strings. Supports %f for microseconds. Use ts\_format for Go-style reference time formats.

#### [](#parameters-108)Parameters

| Name | Type | Description |
| --- | --- | --- |
| format | string | The output format using strptime specifiers. |
| tz (optional) | string | Optional timezone. Defaults to input timezone or local time for unix timestamps. |

#### [](#examples-157)Examples

Format timestamp with strftime specifiers:

```bloblang
root.something_at = this.created_at.ts_strftime("%Y-%b-%d %H:%M:%S")

# In:  {"created_at":"2020-08-14T11:50:26.371Z"}
# Out: {"something_at":"2020-Aug-14 11:50:26"}
```

Format with microseconds using %f directive:

```bloblang
root.something_at = this.created_at.ts_strftime("%Y-%b-%d %H:%M:%S.%f", "UTC")

# In:  {"created_at":"2020-08-14T11:50:26.371Z"}
# Out: {"something_at":"2020-Aug-14 11:50:26.371000"}
```

### [](#ts_strptime)ts_strptime

Parses a timestamp string using strptime format specifiers (like %Y, %m, %d) and outputs a timestamp object. Use ts\_parse for Go-style reference time formats instead.

#### [](#parameters-109)Parameters

| Name | Type | Description |
| --- | --- | --- |
| format | string | The format string using strptime specifiers (e.g., %Y-%m-%d). |

#### [](#examples-158)Examples

Parse date with abbreviated month using strptime format:

```bloblang
root.doc.timestamp = this.doc.timestamp.ts_strptime("%Y-%b-%d")

# In:  {"doc":{"timestamp":"2020-Aug-14"}}
# Out: {"doc":{"timestamp":"2020-08-14T00:00:00Z"}}
```

Parse datetime with microseconds using %f directive:

```bloblang
root.doc.timestamp = this.doc.timestamp.ts_strptime("%Y-%b-%d %H:%M:%S.%f")

# In:  {"doc":{"timestamp":"2020-Aug-14 11:50:26.371000"}}
# Out: {"doc":{"timestamp":"2020-08-14T11:50:26.371Z"}}
```

### [](#ts_sub)ts_sub

Calculates the duration in nanoseconds between two timestamps (t1 - t2). Returns a signed integer: positive if t1 is after t2, negative if t1 is before t2. Use .abs() for absolute duration.

#### [](#parameters-110)Parameters

| Name | Type | Description |
| --- | --- | --- |
| t2 | timestamp | The timestamp to subtract from the target timestamp. |

#### [](#examples-159)Examples

Calculate absolute duration between two timestamps:

```bloblang
root.between = this.started_at.ts_sub("2020-08-14T05:54:23Z").abs()

# In:  {"started_at":"2020-08-13T05:54:23Z"}
# Out: {"between":86400000000000}
```

Calculate signed duration (can be negative):

```bloblang
root.duration_ns = this.end_time.ts_sub(this.start_time)

# In:  {"start_time":"2020-08-14T10:00:00Z","end_time":"2020-08-14T11:30:00Z"}
# Out: {"duration_ns":5400000000000}
```

### [](#ts_sub_iso8601)ts_sub_iso8601

Subtracts an ISO 8601 duration from a timestamp with calendar-aware precision for years, months, and days. Useful when you need to subtract durations that account for variable month lengths or leap years.

#### [](#parameters-111)Parameters

| Name | Type | Description |
| --- | --- | --- |
| duration | string | Duration in ISO 8601 format (e.g., "P1Y2M3D" for 1 year, 2 months, 3 days) |

#### [](#examples-160)Examples

Subtract one year from a timestamp:

```bloblang
root.last_year = this.created_at.ts_sub_iso8601("P1Y")

# In:  {"created_at":"2020-08-14T05:54:23Z"}
# Out: {"last_year":"2019-08-14T05:54:23Z"}
```

Subtract a complex duration with multiple units:

```bloblang
root.past_date = this.created_at.ts_sub_iso8601("P1Y2M3DT4H5M6S")

# In:  {"created_at":"2021-03-04T04:05:06Z"}
# Out: {"past_date":"2020-01-01T00:00:00Z"}
```

### [](#ts_tz)ts_tz

Converts a timestamp to a different timezone while preserving the moment in time. Accepts unix timestamps (seconds with optional decimal precision) or RFC 3339 formatted strings.

#### [](#parameters-112)Parameters

| Name | Type | Description |
| --- | --- | --- |
| tz | string | The timezone to change to. Use "UTC" for UTC, "Local" for local timezone, or an IANA Time Zone database location name like "America/New_York". |

#### [](#examples-161)Examples

Convert timestamp to UTC timezone:

```bloblang
root.created_at_utc = this.created_at.ts_tz("UTC")

# In:  {"created_at":"2021-02-03T17:05:06+01:00"}
# Out: {"created_at_utc":"2021-02-03T16:05:06Z"}
```

Convert timestamp to a specific timezone:

```bloblang
root.created_at_ny = this.created_at.ts_tz("America/New_York")

# In:  {"created_at":"2021-02-03T16:05:06Z"}
# Out: {"created_at_ny":"2021-02-03T11:05:06-05:00"}
```

### [](#ts_unix)ts_unix

Converts a timestamp to a unix timestamp (seconds since epoch). Accepts unix timestamps or RFC 3339 strings. Returns an integer representing seconds.

#### [](#examples-162)Examples

Convert RFC 3339 timestamp to unix seconds:

```bloblang
root.created_at_unix = this.created_at.ts_unix()

# In:  {"created_at":"2009-11-10T23:00:00Z"}
# Out: {"created_at_unix":1257894000}
```

Unix timestamp passthrough returns same value:

```bloblang
root.timestamp = this.ts.ts_unix()

# In:  {"ts":1257894000}
# Out: {"timestamp":1257894000}
```

### [](#ts_unix_micro)ts_unix_micro

Converts a timestamp to a unix timestamp with microsecond precision (microseconds since epoch). Accepts unix timestamps or RFC 3339 strings. Returns an integer representing microseconds.

#### [](#examples-163)Examples

Convert timestamp to microseconds since epoch:

```bloblang
root.created_at_unix = this.created_at.ts_unix_micro()

# In:  {"created_at":"2009-11-10T23:00:00Z"}
# Out: {"created_at_unix":1257894000000000}
```

Preserve microsecond precision from timestamp:

```bloblang
root.precise_time = this.timestamp.ts_unix_micro()

# In:  {"timestamp":"2020-08-14T11:45:26.123456Z"}
# Out: {"precise_time":1597405526123456}
```

### [](#ts_unix_milli)ts_unix_milli

Converts a timestamp to a unix timestamp with millisecond precision (milliseconds since epoch). Accepts unix timestamps or RFC 3339 strings. Returns an integer representing milliseconds.

#### [](#examples-164)Examples

Convert timestamp to milliseconds since epoch:

```bloblang
root.created_at_unix = this.created_at.ts_unix_milli()

# In:  {"created_at":"2009-11-10T23:00:00Z"}
# Out: {"created_at_unix":1257894000000}
```

Useful for JavaScript timestamp compatibility:

```bloblang
root.js_timestamp = this.event_time.ts_unix_milli()

# In:  {"event_time":"2020-08-14T11:45:26.123Z"}
# Out: {"js_timestamp":1597405526123}
```

### [](#ts_unix_nano)ts_unix_nano

Converts a timestamp to a unix timestamp with nanosecond precision (nanoseconds since epoch). Accepts unix timestamps or RFC 3339 strings. Returns an integer representing nanoseconds.

#### [](#examples-165)Examples

Convert timestamp to nanoseconds since epoch:

```bloblang
root.created_at_unix = this.created_at.ts_unix_nano()

# In:  {"created_at":"2009-11-10T23:00:00Z"}
# Out: {"created_at_unix":1257894000000000000}
```

Preserve full nanosecond precision:

```bloblang
root.precise_time = this.timestamp.ts_unix_nano()

# In:  {"timestamp":"2020-08-14T11:45:26.123456789Z"}
# Out: {"precise_time":1597405526123456789}
```

## [](#type-coercion)Type coercion

### [](#array)array

Converts a value to an array.

#### [](#examples-166)Examples

```bloblang
root.my_array = this.name.array()

# In:  {"name":"foobar bazson"}
# Out: {"my_array":["foobar bazson"]}
```

### [](#bool)bool

Converts a value to a boolean with optional fallback.

#### [](#parameters-113)Parameters

| Name | Type | Description |
| --- | --- | --- |
| default (optional) | bool | An optional value to yield if the target cannot be parsed as a boolean. |

#### [](#examples-167)Examples

```bloblang
root.foo = this.thing.bool()
root.bar = this.thing.bool(true)
```

### [](#bytes)bytes

Marshals a value into a byte array.

#### [](#examples-168)Examples

```bloblang
root.first_byte = this.name.bytes().index(0)

# In:  {"name":"foobar bazson"}
# Out: {"first_byte":102}
```

### [](#not_empty)not_empty

Ensures a value is not empty.

#### [](#examples-169)Examples

```bloblang
root.a = this.a.not_empty()

# In:  {"a":"foo"}
# Out: {"a":"foo"}

# In:  {"a":""}
# Out: Error("failed assignment (line 1): field `this.a`: string value is empty")

# In:  {"a":["foo","bar"]}
# Out: {"a":["foo","bar"]}

# In:  {"a":[]}
# Out: Error("failed assignment (line 1): field `this.a`: array value is empty")

# In:  {"a":{"b":"foo","c":"bar"}}
# Out: {"a":{"b":"foo","c":"bar"}}

# In:  {"a":{}}
# Out: Error("failed assignment (line 1): field `this.a`: object value is empty")
```

### [](#not_null)not_null

Ensures a value is not null.

#### [](#examples-170)Examples

```bloblang
root.a = this.a.not_null()

# In:  {"a":"foobar","b":"barbaz"}
# Out: {"a":"foobar"}

# In:  {"b":"barbaz"}
# Out: Error("failed assignment (line 1): field `this.a`: value is null")
```

### [](#number)number

Converts a value to a number with optional fallback.

#### [](#parameters-114)Parameters

| Name | Type | Description |
| --- | --- | --- |
| default (optional) | float | An optional value to yield if the target cannot be parsed as a number. |

#### [](#examples-171)Examples

```bloblang
root.foo = this.thing.number() + 10
root.bar = this.thing.number(5) * 10
```

### [](#string)string

Converts a value to a string representation.

#### [](#examples-172)Examples

```bloblang
root.nested_json = this.string()

# In:  {"foo":"bar"}
# Out: {"nested_json":"{\"foo\":\"bar\"}"}
```

```bloblang
root.id = this.id.string()

# In:  {"id":228930314431312345}
# Out: {"id":"228930314431312345"}
```

### [](#timestamp)timestamp

Converts a value to a timestamp with optional fallback.

#### [](#parameters-115)Parameters

| Name | Type | Description |
| --- | --- | --- |
| default (optional) | timestamp | An optional value to yield if the target cannot be parsed as a timestamp. |

#### [](#examples-173)Examples

```bloblang
root.foo = this.ts.timestamp()
root.bar = this.none.timestamp(1234567890.timestamp())
```

### [](#type)type

Returns the type of a value as a string.

#### [](#examples-174)Examples

```bloblang
root.bar_type = this.bar.type()
root.foo_type = this.foo.type()

# In:  {"bar":10,"foo":"is a string"}
# Out: {"bar_type":"number","foo_type":"string"}
```

```bloblang
root.type = this.type()

# In:  "foobar"
# Out: {"type":"string"}

# In:  666
# Out: {"type":"number"}

# In:  false
# Out: {"type":"bool"}

# In:  ["foo", "bar"]
# Out: {"type":"array"}

# In:  {"foo": "bar"}
# Out: {"type":"object"}

# In:  null
# Out: {"type":"null"}
```

```bloblang
root.type = content().type()

# In:  foobar
# Out: {"type":"bytes"}
```

```bloblang
root.type = this.ts_parse("2006-01-02").type()

# In:  "2022-06-06"
# Out: {"type":"timestamp"}
```

## [](#deprecated)Deprecated

### [](#format_timestamp)format_timestamp

> ⚠️ **WARNING**
>
> This method is deprecated and will be removed in a future version.

Formats a timestamp as a string using Go’s reference time format. Defaults to RFC 3339 if no format specified. The format uses "Mon Jan 2 15:04:05 -0700 MST 2006" as a reference. Accepts unix timestamps (with decimal precision) or RFC 3339 strings. Use ts\_strftime for strftime-style formats.

#### [](#parameters-116)Parameters

| Name | Type | Description |
| --- | --- | --- |
| format | string | The output format using Go’s reference time. |
| tz (optional) | string | Optional timezone (e.g., 'UTC', 'America/New_York'). Defaults to input timezone or local time for unix timestamps. |

### [](#format_timestamp_strftime)format_timestamp_strftime

> ⚠️ **WARNING**
>
> This method is deprecated and will be removed in a future version.

Formats a timestamp as a string using strptime format specifiers (like %Y, %m, %d). Accepts unix timestamps (with decimal precision) or RFC 3339 strings. Supports %f for microseconds. Use ts\_format for Go-style reference time formats.

#### [](#parameters-117)Parameters

| Name | Type | Description |
| --- | --- | --- |
| format | string | The output format using strptime specifiers. |
| tz (optional) | string | Optional timezone. Defaults to input timezone or local time for unix timestamps. |

### [](#format_timestamp_unix)format_timestamp_unix

> ⚠️ **WARNING**
>
> This method is deprecated and will be removed in a future version.

Converts a timestamp to a unix timestamp (seconds since epoch). Accepts unix timestamps or RFC 3339 strings. Returns an integer representing seconds.

### [](#format_timestamp_unix_micro)format_timestamp_unix_micro

> ⚠️ **WARNING**
>
> This method is deprecated and will be removed in a future version.

Converts a timestamp to a unix timestamp with microsecond precision (microseconds since epoch). Accepts unix timestamps or RFC 3339 strings. Returns an integer representing microseconds.

### [](#format_timestamp_unix_milli)format_timestamp_unix_milli

> ⚠️ **WARNING**
>
> This method is deprecated and will be removed in a future version.

Converts a timestamp to a unix timestamp with millisecond precision (milliseconds since epoch). Accepts unix timestamps or RFC 3339 strings. Returns an integer representing milliseconds.

### [](#format_timestamp_unix_nano)format_timestamp_unix_nano

> ⚠️ **WARNING**
>
> This method is deprecated and will be removed in a future version.

Converts a timestamp to a unix timestamp with nanosecond precision (nanoseconds since epoch). Accepts unix timestamps or RFC 3339 strings. Returns an integer representing nanoseconds.

### [](#parse_timestamp)parse_timestamp

> ⚠️ **WARNING**
>
> This method is deprecated and will be removed in a future version.

Parses a timestamp string using Go’s reference time format and outputs a timestamp object. The format uses "Mon Jan 2 15:04:05 -0700 MST 2006" as a reference - show how this reference time would appear in your format. Use ts\_strptime for strftime-style formats instead.

#### [](#parameters-118)Parameters

| Name | Type | Description |
| --- | --- | --- |
| format | string | The format of the input string using Go’s reference time. |

### [](#parse_timestamp_strptime)parse_timestamp_strptime

> ⚠️ **WARNING**
>
> This method is deprecated and will be removed in a future version.

Parses a timestamp string using strptime format specifiers (like %Y, %m, %d) and outputs a timestamp object. Use ts\_parse for Go-style reference time formats instead.

#### [](#parameters-119)Parameters

| Name | Type | Description |
| --- | --- | --- |
| format | string | The format string using strptime specifiers (e.g., %Y-%m-%d). |
