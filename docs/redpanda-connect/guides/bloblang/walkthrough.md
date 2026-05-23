# Bloblang Walkthrough

> For the complete documentation index, see [llms.txt](https://docs.redpanda.com/llms.txt). Component-specific: [redpanda-connect-full.txt](https://docs.redpanda.com/redpanda-connect-full.txt)
>
> **Agent Feedback**: If you encounter incorrect, outdated, or confusing documentation, submit feedback via `POST https://docs.redpanda.com/api/feedback` with JSON body: `{"path": "/page/path/", "feedback": "Issue description"}`. Only submit when you have specific, actionable feedback.

---
title: Bloblang Walkthrough
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
docname: bloblang/walkthrough
page-component-name: redpanda-connect
page-version: master
page-component-version: master
page-component-title: Connect
page-relative-src-path: bloblang/walkthrough.adoc
page-edit-url: https://github.com/redpanda-data/rp-connect-docs/edit/main/modules/guides/pages/bloblang/walkthrough.adoc
description: A step by step introduction to Bloblang
page-git-created-date: "2024-05-24"
page-git-modified-date: "2026-03-31"
---

<!-- Source: https://docs.redpanda.com/redpanda-connect/guides/bloblang/walkthrough.md -->

Bloblang is the most advanced mapping language that you’ll learn from this walkthrough (probably). It is designed for readability, the power to shape even the most outrageous input documents, and to easily make erratic schemas bend to your will. Bloblang is the native mapping language of Redpanda Connect, but it has been designed as a general purpose technology ready to be adopted by other tools.

In this walkthrough you’ll learn how to make new friends by mapping their documents, and lose old friends as they grow jealous and bitter of your mapping abilities. There are a few ways to execute Bloblang but the way we’ll do it in this guide is to pull a Redpanda Connect docker image and run the command `rpk connect blobl server`, which opens up an interactive Bloblang editor:

```sh
docker pull docker.redpanda.com/redpandadata/connect:latest
docker run -p 4195:4195 --rm docker.redpanda.com/redpandadata/connect blobl server --no-open --host 0.0.0.0
```

> 📝 **NOTE: Alternatives**
>
> Alternatives
>
> For alternative Redpanda Connect installation options check out the [getting started guide](https://docs.redpanda.com/redpanda-connect/get-started/quickstarts/rpk/).

Next, open your browser at `http://localhost:4195` and you should see an app with three panels, the top-left is where you paste an input document, the bottom is your Bloblang mapping and on the top-right is the output.

## [](#your-first-assignment)Your first assignment

The primary goal of a Bloblang mapping is to construct a brand new document by using an input document as a reference, which we achieve through a series of assignments. Bloblang is traditionally used to map JSON documents and that’s mostly what we’ll be doing in this walkthrough. The first mapping you’ll see when you open the editor is a single assignment:

```bloblang
root = this

# In:  {"message":"hello world"}
# Out: {"message":"hello world"}
```

On the left-hand side of the assignment is our assignment target, where `root` is a keyword referring to the root of the new document being constructed. On the right-hand side is a query which determines the value to be assigned, where `this` is a keyword that refers to the context of the mapping which begins as the root of the input document.

As you can see the input document in the editor begins as a JSON object `{"message":"hello world"}`, and the output panel should show the result as:

```json
{
  "message": "hello world"
}
```

This output is a (neatly formatted) replica of the input document. This is the result of our mapping because we assigned the entire input document to the root of our new thing.

Let’s create a brand new document by assigning a fresh object to the root:

```bloblang
root = {}
root.foo = this.message

# In:  {"message":"hello world"}
# Out: {"foo":"hello world"}
```

Bloblang supports a bunch of [literal types](https://docs.redpanda.com/redpanda-connect/guides/bloblang/about/#literals), and the first line of this mapping assigns an empty object literal to the root. The second line then creates a new field `foo` on that object by assigning it the value of `message` from the input document. You should see that our output has changed to:

```json
{
  "foo": "hello world"
}
```

In Bloblang, when the path that we assign to contains fields that are themselves unset then they are created as empty objects. This rule also applies to `root` itself, which means the mapping:

```bloblang
root.foo.bar = this.message
root.foo."buz me".baz = "I like mapping"

# In:  {"message":"hello world"}
# Out: {"foo":{"bar":"hello world","buz me":{"baz":"I like mapping"}}}
```

Will automatically create the objects required to produce the output document:

```json
{
  "foo": {
    "bar": "hello world",
    "buz me": {
      "baz": "I like mapping"
    }
  }
}
```

Also note that we can use quotes in order to express path segments that contain symbols or whitespace. Great, let’s move on quick before our self-satisfaction gets in the way of progress.

## [](#basic-methods-and-functions)Basic methods and functions

Nothing is ever good enough for you, why should the input document be any different? Usually in our mappings it’s necessary to mutate values whilst we map them over, this is almost always done with methods, of which [there are many](https://docs.redpanda.com/redpanda-connect/guides/bloblang/methods/). To demonstrate we’re going to change our mapping to [uppercase](https://docs.redpanda.com/redpanda-connect/guides/bloblang/methods/#uppercase) the field `message` from our input document:

```bloblang
root.foo.bar = this.message.uppercase()
root.foo."buz me".baz = "I like mapping"

# In:  {"message":"hello world"}
# Out: {"foo":{"bar":"HELLO WORLD","buz me":{"baz":"I like mapping"}}}
```

As you can see the syntax for a method is similar to many languages, simply add a dot on the target value followed by the method name and arguments within brackets. With this method added our output document should look like this:

```json
{
  "foo": {
    "bar": "HELLO WORLD",
    "buz me": {
      "baz": "I like mapping"
    }
  }
}
```

Since the result of any Bloblang query is a value you can use methods on anything, including other methods. For example, we could expand our mapping of `message` to also replace `WORLD` with `EARTH` using the [`replace_all` method](https://docs.redpanda.com/redpanda-connect/guides/bloblang/methods/#replace_all):

```bloblang
root.foo.bar = this.message.uppercase().replace_all("WORLD", "EARTH")
root.foo."buz me".baz = "I like mapping"

# In:  {"message":"hello world"}
# Out: {"foo":{"bar":"HELLO EARTH","buz me":{"baz":"I like mapping"}}}
```

As you can see this method required some arguments. Methods support both nameless (like above) and named arguments, which are often literal values but can also be queries themselves. For example try out the following mapping using both named style and a dynamic argument:

```bloblang
root.foo.bar = this.message.uppercase().replace_all(old: "WORLD", new: this.message.capitalize())
root.foo."buz me".baz = "I like mapping"

# In:  {"message":"hello world"}
# Out: {"foo":{"bar":"HELLO Hello World","buz me":{"baz":"I like mapping"}}}
```

Woah, I think that’s the plot to Inception, let’s move onto functions. Functions are just boring methods that don’t have a target, and there are [plenty of them as well](https://docs.redpanda.com/redpanda-connect/guides/bloblang/functions/). Functions are often used to extract information unrelated to the input document, such as [environment variables](https://docs.redpanda.com/redpanda-connect/guides/bloblang/functions/#env), or to generate data such as [timestamps](https://docs.redpanda.com/redpanda-connect/guides/bloblang/functions/#now) or [UUIDs](https://docs.redpanda.com/redpanda-connect/guides/bloblang/functions/#uuid_v4).

Since we’re completionists let’s add one to our mapping:

```bloblang
root.foo.bar = this.message.uppercase().replace_all("WORLD", "EARTH")
root.foo."buz me".baz = "I like mapping"
root.foo.id = uuid_v4()

# In:  {"message":"hello world"}
```

Now I can’t tell you what the output looks like since it will be different each time it’s mapped, how fun!

### [](#deletions)Deletions

Everything in Bloblang is an expression to be assigned, including deletions, which is a [function `deleted()`](https://docs.redpanda.com/redpanda-connect/guides/bloblang/functions/#deleted). To illustrate let’s create a field we want to delete by changing our input to the following:

```json
{
  "name": "fooman barson",
  "age": 7,
  "opinions": ["trucks are cool","trains are cool","chores are bad"]
}
```

If we wanted a full copy of this document without the field `name` then we can assign `deleted()` to it:

```bloblang
root = this
root.name = deleted()

# In:  {"name":"fooman barson","age":7,"opinions":["trucks are cool","trains are cool","chores are bad"]}
# Out: {"age":7,"opinions":["trucks are cool","trains are cool","chores are bad"]}
```

And it won’t be included in the output:

```json
{
  "age": 7,
  "opinions": [
    "trucks are cool",
    "trains are cool",
    "chores are bad"
  ]
}
```

An alternative way to delete fields is the [method `without`](https://docs.redpanda.com/redpanda-connect/guides/bloblang/methods/#without), our above example could be rewritten as a single assignment `root = this.without("name")`. However, `deleted()` is generally more powerful and will come into play more later on.

## [](#variables)Variables

Sometimes it’s necessary to capture a value for later, but we might not want it to be added to the resulting document. In Bloblang we can achieve this with variables which are created using the `let` keyword, and can be referenced within subsequent queries with a dollar sign prefix:

```bloblang
let id = uuid_v4()
root.id_sha1 = $id.hash("sha1").encode("hex")
root.id_md5 = $id.hash("md5").encode("hex")

# In:  {}
```

Variables can be assigned any value type, including objects and arrays.

## [](#unstructured-and-binary-data)Unstructured and binary data

So far in all of our examples both the input document and our newly mapped document are structured, but this does not need to be so. Try assigning some literal value types directly to the `root`, such as a string `root = "hello world"`, or a number `root = 5`.

You should notice that when a value type is assigned to the root the output is the raw value, and therefore strings are not quoted. This is what makes it possible to output data of any format, including encrypted, encoded or otherwise binary data.

Unstructured mapping is not limited to the output. Rather than referencing the input document with `this`, where it must be structured, it is possible to reference it as a binary string with the [function `content`](https://docs.redpanda.com/redpanda-connect/guides/bloblang/functions/#content), try changing your mapping to:

```bloblang
root = content().uppercase()

# In:  hello world
# Out: HELLO WORLD
```

When you add content to the input panel, it should be the same in the output panel, but in all uppercase.

## [](#conditionals)Conditionals

In order to play around with conditionals let’s set our input to something structured:

```json
{
  "pet": {
    "type": "cat",
    "is_cute": true,
    "treats": 5,
    "toys": 3
  }
}
```

In Bloblang all conditionals are expressions, this is a core principal of Bloblang and will be important later on when we’re mapping deeply nested structures.

### [](#if-expression)If expression

The simplest conditional is the `if` expression, where the boolean condition does not need to be in parentheses. Let’s create a map that modifies the number of treats our pet receives based on a field:

```bloblang
root = this
root.pet.treats = if this.pet.is_cute {
  this.pet.treats + 10
}

# In:  {"pet":{"type":"cat","is_cute":true,"treats":5,"toys":3}}
# Out: {"pet":{"type":"cat","is_cute":true,"treats":15,"toys":3}}
```

Try that mapping out and you should see the number of treats in the output increased to 15. Now try changing the input field `pet.is_cute` to `false` and the output treats count should go back to the original 5.

When a conditional expression doesn’t have a branch to execute then the assignment is skipped entirely, which means when the pet is not cute the value of `pet.treats` is unchanged (and remains the value set in the `root = this` assignment).

We can add an `else` block to our `if` expression to remove treats entirely when the pet is not cute:

```bloblang
root = this
root.pet.treats = if this.pet.is_cute {
  this.pet.treats + 10
} else {
  deleted()
}

# In:  {"pet":{"type":"cat","is_cute":true,"treats":5,"toys":3}}
# Out: {"pet":{"type":"cat","is_cute":true,"treats":15,"toys":3}}
```

This is possible because field deletions are expressed as assigned values created with the `deleted()` function.

### [](#if-statement)If statement

The `if` keyword can also be used as a statement in order to conditionally apply a series of mapping assignments, the previous example can be rewritten as:

```bloblang
root = this
if this.pet.is_cute {
  root.pet.treats = this.pet.treats + 10
} else {
  root.pet.treats = deleted()
}

# In:  {"pet":{"type":"cat","is_cute":true,"treats":5,"toys":3}}
# Out: {"pet":{"type":"cat","is_cute":true,"treats":15,"toys":3}}
```

Converting this mapping to use a statement has resulted in a more verbose mapping as we had to specify `root.pet.treats` multiple times as an assignment target. However, using `if` as a statement can be beneficial when multiple assignments rely on the same logic:

```bloblang
root = this
if this.pet.is_cute {
  root.pet.treats = this.pet.treats + 10
  root.pet.toys = this.pet.toys + 10
}

# In:  {"pet":{"type":"cat","is_cute":true,"treats":5,"toys":3}}
# Out: {"pet":{"type":"cat","is_cute":true,"treats":15,"toys":13}}
```

More treats _and_ more toys! Lucky Spot!

### [](#match-expression)Match expression

Another conditional expression is `match` which allows you to list many branches consisting of a condition and a query to execute separated with `=>`, where the first condition to pass is the one that is executed:

```bloblang
root = this
root.pet.toys = match {
  this.pet.treats > 5 => this.pet.treats - 5,
  this.pet.type == "cat" => 3,
  this.pet.type == "dog" => this.pet.toys - 3,
  this.pet.type == "horse" => this.pet.toys + 10,
  _ => 0,
}

# In:  {"pet":{"type":"cat","is_cute":true,"treats":5,"toys":3}}
# Out: {"pet":{"type":"cat","is_cute":true,"treats":5,"toys":3}}
```

Try executing that mapping with different values for `pet.type` and `pet.treats`. Match expressions can also specify a new context for the keyword `this` which can help reduce some of the boilerplate in your boolean conditions. The following mapping is equivalent to the previous:

```bloblang
root = this
root.pet.toys = match this.pet {
  this.treats > 5 => this.treats - 5,
  this.type == "cat" => 3,
  this.type == "dog" => this.toys - 3,
  this.type == "horse" => this.toys + 10,
  _ => 0,
}

# In:  {"pet":{"type":"cat","is_cute":true,"treats":5,"toys":3}}
# Out: {"pet":{"type":"cat","is_cute":true,"treats":5,"toys":3}}
```

Your boolean conditions can also be expressed as value types, in which case the context being matched will be compared to the value:

```bloblang
root = this
root.pet.toys = match this.pet.type {
  "cat" => 3,
  "dog" => 5,
  "rabbit" => 8,
  "horse" => 20,
  _ => 0,
}

# In:  {"pet":{"type":"cat","is_cute":true,"treats":5,"toys":3}}
# Out: {"pet":{"type":"cat","is_cute":true,"treats":5,"toys":3}}
```

## [](#error-handling)Error handling

Bloblang can simplify handling errors.

First, let’s take a look at what happens when errors _aren’t_ handled, change your input to the following:

```json
{
  "palace_guards": 10,
  "angry_peasants": "I couldn't be bothered to ask them"
}
```

And change your mapping to something simple like a number comparison:

```bloblang
root.in_trouble = this.angry_peasants > this.palace_guards

# In:  {"palace_guards":10,"angry_peasants":"I couldn't be bothered to ask them"}
```

Uh oh! It looks like our canvasser was too lazy and our `angry_peasants` count was incorrectly set for this document. You should see an error in the output window that mentions something like `cannot compare types string (from field this.angry_peasants) and number (from field this.palace_guards)`, which means the mapping was abandoned.

So what if we want to try and map something, but don’t care if it fails? In this case if we are unable to compare our angry peasants with palace guards then I would still consider us in trouble just to be safe.

For that we have a special [method `catch`](https://docs.redpanda.com/redpanda-connect/guides/bloblang/methods/#catch), which if we add to any query allows us to specify an argument to be returned when an error occurs. Since methods can be added to any query we can surround our arithmetic with brackets and catch the whole thing:

```bloblang
root.in_trouble = (this.angry_peasants > this.palace_guards).catch(true)

# In:  {"palace_guards":10,"angry_peasants":"I couldn't be bothered to ask them"}
# Out: {"in_trouble":true}
```

Now instead of an error we should see an output with `in_trouble` set to `true`. Try changing to value of `angry_peasants` to a few different values, including some numbers.

One of the powerful features of `catch` is that when it is added at the end of a series of expressions and methods it will capture errors at any part of the series, allowing you to capture errors at any granularity. For example, the mapping:

```bloblang
root.abort_mission = if this.mission.type == "impossible" {
  !this.user.motives.contains("must clear name")
} else {
  this.mission.difficulty > 10
}.catch(false)

# In:  {"mission":{"type":"impossible","difficulty":5},"user":{"motives":["must clear name"]}}
# Out: {"abort_mission":false}
```

Will catch errors caused by:

-   `this.mission.type` not being a string

-   `this.user.motives` not being an array

-   `this.mission.difficulty` not being a number


But will always return `false` if any of those errors occur. Try it out with this input and play around by breaking some of the fields:

```json
{
  "mission": {
    "type": "impossible",
    "difficulty": 5
  },
  "user": {
    "motives": ["must clear name"]
  }
}
```

Now try out this mapping:

```bloblang
root.abort_mission = if (this.mission.type == "impossible").catch(true) {
  !this.user.motives.contains("must clear name").catch(false)
} else {
  (this.mission.difficulty > 10).catch(true)
}

# In:  {"mission":{"type":"impossible","difficulty":5},"user":{"motives":["must clear name"]}}
# Out: {"abort_mission":false}
```

This version is more granular and will capture each of the errors individually, with each error given a unique `true` or `false` fallback.

## [](#validation)Validation

Sometimes errors are what we want. Failing a mapping with an error allows us to handle the bad document in other ways, such as routing it to a dead-letter queue or filtering it entirely.

You can read about common Redpanda Connect error handling patterns for bad data in the [error handling guide](https://docs.redpanda.com/redpanda-connect/configuration/error_handling/), but the first step is to create the error. Luckily, Bloblang has a range of ways of creating errors under certain circumstances, which can be used in order to validate the data being mapped.

There are [a few helper methods](https://docs.redpanda.com/redpanda-connect/guides/bloblang/methods/#type-coercion) that make validating and coercing fields nice and easy, try this mapping out:

```bloblang
root.foo = this.foo.number()
root.bar = this.bar.not_null()
root.baz = this.baz.not_empty()

# In:  {"foo":5,"bar":"hello world","baz":[1,2,3]}
# Out: {"foo":5,"bar":"hello world","baz":[1,2,3]}
```

With some of these sample inputs:

```json
{"foo":"nope","bar":"hello world","baz":[1,2,3]}
{"foo":5,"baz":[1,2,3]}
{"foo":10,"bar":"hello world","baz":[]}
```

However, these methods don’t cover all use cases. The general purpose error throwing technique is the [`throw` function](https://docs.redpanda.com/redpanda-connect/guides/bloblang/functions/#throw), which takes an argument string that describes the error. When it’s called it will throw a mapping error that abandons the mapping.

For example, we can check the type of a field with the [method `type`](https://docs.redpanda.com/redpanda-connect/guides/bloblang/methods/#type), and then throw an error if it’s not the type we expected:

```bloblang
root.foos = if this.user.foos.type() == "array" {
  this.user.foos
} else {
  throw("foos must be an array, but it ain't, what gives?")
}

# In:  {"user":{"foos":[1,2,3]}}
```

Try this mapping out with a few sample inputs:

```json
{"user":{"foos":[1,2,3]}}
{"user":{"foos":"1,2,3"}}
```

## [](#context)Context

In Bloblang, when we refer to the context we’re talking about the value returned with the keyword `this`. At the beginning of a mapping the context starts off as a reference to the root of a structured input document, which is why the mapping `root = this` will result in the same document coming out as you put in.

However, in Bloblang there are mechanisms whereby the context might change, we’ve already seen how this can happen within a `match` expression. Another useful way to change the context is by adding a bracketed query expression as a method to a query, which looks like this:

```bloblang
root = this.foo.bar.(this.baz + this.buz)

# In:  {"foo":{"bar":{"baz":1,"buz":2}}}
# Out: 3
```

Within the bracketed query expression the context becomes the result of the query that it’s a method of, so within the brackets in the above mapping the value of `this` points to the result of `this.foo.bar`, and the mapping is therefore equivalent to:

```bloblang
root = this.foo.bar.baz + this.foo.bar.buz

# In:  {"foo":{"bar":{"baz":1,"buz":2}}}
# Out: 3
```

With this handy trick the `throw` mapping from the validation section above could be rewritten as:

```bloblang
root.foos = this.user.foos.(if this.type() == "array" { this } else {
  throw("foos must be an array, but it ain't, what gives?")
})

# In:  {"user":{"foos":[1,2,3]}}
# Out: {"foos":[1,2,3]}
```

### [](#naming-the-context)Naming the context

Shadowing the keyword `this` with new contexts can look confusing in your mappings, and it also limits you to only being able to reference one context at any given time. As an alternative, Bloblang supports context capture expressions that look similar to lambda functions from other languages, where you can name the new context with the syntax `<context name> -> <query>`, which looks like this:

```bloblang
root = this.foo.bar.(thing -> thing.baz + thing.buz)

# In:  {"foo":{"bar":{"baz":1,"buz":2}}}
# Out: 3
```

Within the brackets we now have a new field `thing`, which returns the context that would have otherwise been captured as `this`. This also means the value returned from `this` hasn’t changed and will continue to return the root of the input document.

## [](#coalescing)Coalescing

Being able to open up bracketed query expressions on fields leads us onto another cool trick in Bloblang referred to as coalescing. It’s very common in the world of document mapping that due to structural deviations a value that we wish to obtain could come from one of multiple possible paths.

To illustrate this problem change the input document to the following:

```json
{
  "thing": {
    "article": {
      "id": "foo",
      "contents": "Some people did some stuff"
    }
  }
}
```

Let’s say we wish to flatten this structure with the following mapping:

```bloblang
root.contents = this.thing.article.contents

# In:  {"thing":{"article":{"id":"foo","contents":"Some people did some stuff"}}}
# Out: {"contents":"Some people did some stuff"}
```

But articles are only one of many document types we expect to receive, where the field `contents` remains the same but the field `article` could instead be `comment` or `share`. In this case we could expand our map of `contents` to use a `match` expression where we check for the existence of `article`, `comment`, etc in the input document.

However, a much cleaner way of approaching this is with the pipe operator (`|`), which in Bloblang can be used to join multiple queries, where the first to yield a non-null result is selected. Change your mapping to the following:

```bloblang
root.contents = this.thing.article.contents | this.thing.comment.contents

# In:  {"thing":{"article":{"id":"foo","contents":"Some people did some stuff"}}}
# Out: {"contents":"Some people did some stuff"}
```

And now try changing the field `article` in your input document to `comment`. You should see that the value of `contents` remains as `Some people did some stuff` in the output document.

Now, rather than write out the full path prefix `this.thing` each time we can use a bracketed query expression to change the context, giving us more space for adding other fields:

```bloblang
root.contents = this.thing.(this.article | this.comment | this.share).contents

# In:  {"thing":{"article":{"id":"foo","contents":"Some people did some stuff"}}}
# Out: {"contents":"Some people did some stuff"}
```

And by the way, the keyword `this` within queries can be omitted and made implicit, which allows us to reduce this even further:

```bloblang
root.contents = this.thing.(article | comment | share).contents

# In:  {"thing":{"article":{"id":"foo","contents":"Some people did some stuff"}}}
# Out: {"contents":"Some people did some stuff"}
```

Finally, we can also add a pipe operator at the end to fallback to a literal value when none of our candidates exists:

```bloblang
root.contents = this.thing.(article | comment | share).contents | "nothing"

# In:  {"thing":{"article":{"id":"foo","contents":"Some people did some stuff"}}}
# Out: {"contents":"Some people did some stuff"}
```

Neat.

## [](#advanced-methods)Advanced methods

What happens when you need to map all of the elements of an array? Or filter the keys of an object by their values? What if the fellowship just used the eagles to fly to mount doom?

Bloblang offers a bunch of advanced methods for [manipulating structured data types](https://docs.redpanda.com/redpanda-connect/guides/bloblang/methods/#object%E2%80%94%E2%80%8Barray-manipulation), let’s take a quick tour of some of the cooler ones. Set your input document to this list of things:

```json
{
  "num_friends": 5,
  "things": [
    {
      "name": "yo-yo",
      "quantity": 10,
      "is_cool": true
    },
    {
      "name": "dish soap",
      "quantity": 50,
      "is_cool": false
    },
    {
      "name": "scooter",
      "quantity": 1,
      "is_cool": true
    },
    {
      "name": "pirate hat",
      "quantity": 7,
      "is_cool": true
    }
  ]
}
```

Let’s say we wanted to reduce the `things` in our input document to only those that are cool and where we have enough of them to share with our friends. We can do this with a [`filter` method](https://docs.redpanda.com/redpanda-connect/guides/bloblang/methods/#filter):

```bloblang
root = this.things.filter(thing -> thing.is_cool && thing.quantity > this.num_friends)

# In:  {"num_friends":5,"things":[{"name":"yo-yo","quantity":10,"is_cool":true},{"name":"dish soap","quantity":50,"is_cool":false},{"name":"scooter","quantity":1,"is_cool":true},{"name":"pirate hat","quantity":7,"is_cool":true}]}
# Out: [{"name":"yo-yo","quantity":10,"is_cool":true},{"name":"pirate hat","quantity":7,"is_cool":true}]
```

Try running that mapping and you’ll see that the output is reduced. What is happening here is that the `filter` method takes an argument that is a query, and that query will be mapped for each individual element of the array (where the context is changed to the element itself). We have captured the context into a field `thing` which allows us to continue referencing the root of the input with `this`.

The `filter` method requires the query parameter to resolve to a boolean `true` or `false`, and if it resolves to `true` the element will be present in the resulting array, otherwise it is removed.

Being able to express a query argument to be applied to a range in this way is one of the more powerful features of Bloblang, and when mapping complex structured data these advanced methods will likely be a common tool that you’ll reach for.

Another such method is [`map_each`](https://docs.redpanda.com/redpanda-connect/guides/bloblang/methods/#map_each), which allows you to mutate each element of an array, or each value of an object. Change your input document to the following:

```json
{
  "talking_heads": [
    "1:E.T. is a bad film,Pokemon corrupted an entire generation",
    "2:Digimon ripped off Pokemon,Cats are boring",
    "3:I'm important",
    "4:Science is just made up,The Pokemon films are good,The weather is good"
  ]
}
```

Here we have an array of talking heads, where each element is a string containing an identifer, a colon, and a comma separated list of their opinions. We wish to map each string into a structured object, which we can do with the following mapping:

```bloblang
root = this.talking_heads.map_each(raw -> {
  "id": raw.split(":").index(0),
  "opinions": raw.split(":").index(1).split(",")
})

# In:  {"talking_heads":["1:E.T. is a bad film,Pokemon corrupted an entire generation","2:Digimon ripped off Pokemon,Cats are boring","3:I'm important","4:Science is just made up,The Pokemon films are good,The weather is good"]}
# Out: [{"id":"1","opinions":["E.T. is a bad film","Pokemon corrupted an entire generation"]},{"id":"2","opinions":["Digimon ripped off Pokemon","Cats are boring"]},{"id":"3","opinions":["I'm important"]},{"id":"4","opinions":["Science is just made up","The Pokemon films are good","The weather is good"]}]
```

The argument to `map_each` is a query where the context is the element, which we capture into the field `raw`. The result of the query argument will become the value of the element in the resulting array, and in this case we return an object literal.

In order to separate the identifier from opinions we perform a `split` by colon on the raw string element and get the first substring with the `index` method. We then do the split again and extract the remainder, and split that by comma in order to extract all of the opinions to an array field.

However, one problem with this mapping is that the split by colon is written out twice and executed twice. A more efficient way of performing the same thing is with the bracketed query expressions we’ve played with before:

```bloblang
root = this.talking_heads.map_each(raw -> raw.split(":").(split_string -> {
  "id": split_string.index(0),
  "opinions": split_string.index(1).split(",")
}))

# In:  {"talking_heads":["1:E.T. is a bad film,Pokemon corrupted an entire generation","2:Digimon ripped off Pokemon,Cats are boring","3:I'm important","4:Science is just made up,The Pokemon films are good,The weather is good"]}
# Out: [{"id":"1","opinions":["E.T. is a bad film","Pokemon corrupted an entire generation"]},{"id":"2","opinions":["Digimon ripped off Pokemon","Cats are boring"]},{"id":"3","opinions":["I'm important"]},{"id":"4","opinions":["Science is just made up","The Pokemon films are good","The weather is good"]}]
```

> 📝 **NOTE: Challenge!**
>
> Challenge!
>
> Try updating that map so that only opinions that mention Pokemon are kept

To find more methods for manipulating structured data types check out the [methods page](https://docs.redpanda.com/redpanda-connect/guides/bloblang/methods/#object%E2%80%94%E2%80%8Barray-manipulation).

## [](#reusable-mappings)Reusable mappings

Bloblang has cool methods, sure, but there’s nothing cooler than methods you’ve made yourself. When the going gets tough in the mapping world the best solution is often to create a named mapping, which you can do with the keyword `map`:

```bloblang
map parse_talking_head {
  let split_string = this.split(":")

  root.id = $split_string.index(0)
  root.opinions = $split_string.index(1).split(",")
}

root = this.talking_heads.map_each(raw -> raw.apply("parse_talking_head"))

# In:  {"talking_heads":["1:E.T. is a bad film,Pokemon corrupted an entire generation","2:Digimon ripped off Pokemon,Cats are boring","3:I'm important","4:Science is just made up,The Pokemon films are good,The weather is good"]}
# Out: [{"id":"1","opinions":["E.T. is a bad film","Pokemon corrupted an entire generation"]},{"id":"2","opinions":["Digimon ripped off Pokemon","Cats are boring"]},{"id":"3","opinions":["I'm important"]},{"id":"4","opinions":["Science is just made up","The Pokemon films are good","The weather is good"]}]
```

The body of a named map, encapsulated with squiggly brackets, is a totally isolated mapping where `root` now refers to a new value being created for each invocation of the map, and `this` refers to the root of the context provided to the map.

Named maps are executed with the [method `apply`](https://docs.redpanda.com/redpanda-connect/guides/bloblang/methods/#apply), which has a string parameter identifying the map to execute, this means it’s possible to dynamically select the target map.

As you can see in the above example we were able to use a custom map in order to create our talking head objects without the object literal. Within a named map we can also create variables that exist only within the scope of the map.

A nice feature of named mappings is that they can invoke themselves recursively, allowing you to define mappings that walk deeply nested structures. The following mapping will scrub all values from a document that contain the word "Voldemort" (case insensitive):

```bloblang
map remove_naughty_man {
  root = match {
    this.type() == "object" => this.map_each(item -> item.value.apply("remove_naughty_man")),
    this.type() == "array" => this.map_each(ele -> ele.apply("remove_naughty_man")),
    this.type() == "string" => if this.lowercase().contains("voldemort") { deleted() },
    this.type() == "bytes" => if this.lowercase().contains("voldemort") { deleted() },
    _ => this,
  }
}

root = this.apply("remove_naughty_man")

# In:  {"summer_party":{"theme":"the woman in black","guests":["Emma Bunton","the seal I spotted in Trebarwith","Voldemort","The cast of Swiss Army Man","Richard"],"notes":{"lisa":"I don't think voldemort eats fish","monty":"Seals hate dance music"}},"crushes":["Richard is nice but he hates pokemon","Victoria Beckham but I think she's taken","Charlie but they're totally into Voldemort"]}
```

Try running that mapping with the following input document:

```json
{
  "summer_party": {
    "theme": "the woman in black",
    "guests": [
      "Emma Bunton",
      "the seal I spotted in Trebarwith",
      "Voldemort",
      "The cast of Swiss Army Man",
      "Richard"
    ],
    "notes": {
      "lisa": "I don't think voldemort eats fish",
      "monty": "Seals hate dance music"
    }
  },
  "crushes": [
    "Richard is nice but he hates pokemon",
    "Victoria Beckham but I think she's taken",
    "Charlie but they're totally into Voldemort"
  ]
}
```

## [](#unit-testing)Unit testing

Redpanda Connect has it’s own [unit testing capabilities](https://docs.redpanda.com/redpanda-connect/configuration/unit_testing/) that you can also use for your mappings. To start with save a mapping into a file called something like `naughty_man.blobl`, we can use the example above from the reusable mappings section:

```bloblang
map remove_naughty_man {
  root = match {
    this.type() == "object" => this.map_each(item -> item.value.apply("remove_naughty_man")),
    this.type() == "array" => this.map_each(ele -> ele.apply("remove_naughty_man")),
    this.type() == "string" => if this.lowercase().contains("voldemort") { deleted() },
    this.type() == "bytes" => if this.lowercase().contains("voldemort") { deleted() },
    _ => this,
  }
}

root = this.apply("remove_naughty_man")
```

Next, we can define our unit tests in an accompanying YAML file in the same directory, let’s call this `naughty_man_test.yaml`:

```yaml
tests:
  - name: test naughty man scrubber
    target_mapping: './naughty_man.blobl'
    environment: {}
    input_batch:
      - content: |
          {
            "summer_party": {
              "theme": "the woman in black",
              "guests": [
                "Emma Bunton",
                "the seal I spotted in Trebarwith",
                "Voldemort",
                "The cast of Swiss Army Man",
                "Richard"
              ]
            }
          }
    output_batches:
      -
        - json_equals: {
            "summer_party": {
              "theme": "the woman in black",
              "guests": [
                "Emma Bunton",
                "the dolphin I spotted in Trebarwith",
                "The cast of Swiss Army Man",
                "Richard"
              ]
            }
          }
```

As you can see we’ve defined a single test, where we point to our mapping file which will be executed in our test. We then specify an input message which is a reduced version of the document we tried out before, and finally we specify output predicates, which is a JSON comparison against the output document.

We can execute these tests with `rpk connect test ./naughty_man_test.yaml`, Redpanda Connect will also automatically find our tests if you simply run `rpk connect test ./…​`. You should see an output something like:

```text
Test 'naughty_man_test.yaml' failed

Failures:

--- naughty_man_test.yaml ---

test naughty man scrubber [line 2]:
batch 0 message 0: json_equals: JSON content mismatch
{
    "summer_party": {
        "guests": [
            "Emma Bunton",
            "the seal I spotted in Trebarwith" => "the dolphin I spotted in Trebarwith",
            "The cast of Swiss Army Man",
            "Richard"
        ],
        "theme": "the woman in black"
    }
}
```

Because in actual fact our expected output is wrong, I’ll leave it to you to spot the error. Once the test is fixed you should see:

```text
Test 'naughty_man_test.yaml' succeeded
```

And now our mapping, should we need to expand it in the future, is better protected against regressions. You can read more about the Redpanda Connect unit test specification, including alternative output predicates, in [this document](https://docs.redpanda.com/redpanda-connect/configuration/unit_testing/).
