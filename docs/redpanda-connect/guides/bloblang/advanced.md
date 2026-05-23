# Advanced Bloblang

> For the complete documentation index, see [llms.txt](https://docs.redpanda.com/llms.txt). Component-specific: [redpanda-connect-full.txt](https://docs.redpanda.com/redpanda-connect-full.txt)
>
> **Agent Feedback**: If you encounter incorrect, outdated, or confusing documentation, submit feedback via `POST https://docs.redpanda.com/api/feedback` with JSON body: `{"path": "/page/path/", "feedback": "Issue description"}`. Only submit when you have specific, actionable feedback.

---
title: Advanced Bloblang
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
docname: bloblang/advanced
page-component-name: redpanda-connect
page-version: master
page-component-version: master
page-component-title: Connect
page-relative-src-path: bloblang/advanced.adoc
page-edit-url: https://github.com/redpanda-data/rp-connect-docs/edit/main/modules/guides/pages/bloblang/advanced.adoc
description: Some advanced Bloblang patterns
page-git-created-date: "2024-05-24"
page-git-modified-date: "2026-02-04"
---

<!-- Source: https://docs.redpanda.com/redpanda-connect/guides/bloblang/advanced.md -->

## [](#map-parameters)Map parameters

A map definition only has one input parameter, which is the context that it is called upon:

```bloblang
map formatting {
  root = "(%v)".format(this)
}

root.a = this.a.apply("formatting")
root.b = this.b.apply("formatting")

# In:  {"a":"foo","b":"bar"}
```

However, we can use object literals in order to provide multiple map parameters. Imagine if we wanted a map that is the exact same as above except the pattern is `[%v]` instead, with the potential for even more patterns in the future. To do that we can pass an object with a field `value` with our target to map and a field `pattern` which allows us to specify the pattern to apply:

```bloblang
map formatting {
  root = this.pattern.format(this.value)
}

root.a = {
  "value":this.a,
  "pattern":this.pattern,
}.apply("formatting")

root.b = {
  "value":this.b,
  "pattern":this.pattern,
}.apply("formatting")

# In:  {"a":"foo","b":"bar","pattern":"[%v]"}
```

## [](#walking-the-tree)Walking the tree

Sometimes it’s necessary to perform a mapping on all values within an unknown tree structure. You can do that easily with recursive mapping:

```bloblang
map unescape_values {
  root = match {
    this.type() == "object" => this.map_each(item -> item.value.apply("unescape_values")),
    this.type() == "array" => this.map_each(ele -> ele.apply("unescape_values")),
    this.type() == "string" => this.unescape_html(),
    this.type() == "bytes" => this.unescape_html(),
    _ => this,
  }
}
root = this.apply("unescape_values")

# In:  {"first":{"nested":"foo &amp; bar"},"second":10,"third":["1 &lt; 2",{"also_nested":"2 &gt; 1"}]}
```

## [](#message-expansion)Message expansion

Expanding a single message into multiple messages can be done by mapping messages into an array and following it up with an [`unarchive` processor](https://docs.redpanda.com/redpanda-connect/components/processors/unarchive/). For example, given documents of this format:

```json
{
  "id": "foobar",
  "items": [
    {"content":"foo"},
    {"content":"bar"},
    {"content":"baz"}
  ]
}
```

We can pull `items` out to the root with `root = items` with a [`mapping` processor](https://docs.redpanda.com/redpanda-connect/components/processors/mapping/) and follow it with an [`unarchive` processor](https://docs.redpanda.com/redpanda-connect/components/processors/unarchive/) to expand each element into its own independent message:

```yaml
pipeline:
  processors:
    - mapping: root = this.items
    - unarchive:
        format: json_array
```

However, most of the time we also need to map the elements before expanding them, and often that includes copying fields outside of our target array. We can do that with methods such as `map_each` and `merge`:

```bloblang
# In:  {"id":"foobar","items":[{"content":"foo"},{"content":"bar"},{"content":"baz"}]}

root = this.items.map_each(ele -> this.without("items").merge(ele))
```

However, the above mapping is slightly inefficient as we would create a copy of our source object for each element with the `this.without("items")` part. A more efficient way to do this would be to capture that query within a variable:

```bloblang
# In:  {"id":"foobar","items":[{"content":"foo"},{"content":"bar"},{"content":"baz"}]}

let doc_root = this.without("items")
root = this.items.map_each($doc_root.merge(this))
```

Also note that when we set `doc_root` we remove the field `items` from the target document. The full config would now be:

```yaml
pipeline:
  processors:
    - mapping: |
        let doc_root = this.without("items")
        root = this.items.map_each($doc_root.merge(this))
    - unarchive:
        format: json_array
```

## [](#creating-csv)Creating CSV

Redpanda Connect has a few different ways of outputting a stream of CSV data. However, the best way to do it is by converting the documents into CSV rows with Bloblang as this gives you full control over exactly how the schema is generated, erroneous data is handled, and escaping of column data is performed.

A common and simple use case is to simply flatten documents and write out the column values in alphabetical order. The first row we generate should also be prefixed with a row containing those column names. Here’s a mapping that achieves this by using a `count` function to detect the very first invocation of the mapping in a stream pipeline:

```bloblang
# In:  {"name":"foo","address":"123 Main St, Apt 2"}
#      foo,"123 Main St, Apt 2"

map escape_csv {
  root = if this.re_match("[\"\n,]+") {
    "\"" + this.replace_all("\"", "\"\"") + "\""
  } else {
    this
  }
}

# Extract key/value pairs as an array and sort by the key
let kvs = this.key_values().sort_by(v -> v.key)

# Create a header prefix for our output only on the first row
let header = if count("rows_in_file") == 1 {
  $kvs.map_each(kv -> kv.key.apply("escape_csv")).join(",") + "\n"
} else { "" }

root = $header + $kvs.map_each(kv -> kv.value.string().apply("escape_csv")).join(",")
```

And with this mapping we can write the data to a newly created CSV file using an output with a simple `lines` codec:

```yaml
output:
  file:
    path: ./result.csv
    codec: lines
```

Perhaps the first expansion of this mapping that would be worthwhile is to add an explicit list of column names, or at least confirm that the number of values in a row matches an expected count.
