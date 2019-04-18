# GPC K8S

This is a POC Kubernetes deployment for DSR. To test it we'll be using a simple php script (yes! PHP!)
running on a cluster of 2 nodes, with 2 instances. The Docker images are listening on port 80

## Install Notes

## Creating the service account

The first step is to create a service account. The service account will need the following permissions

* Cloud Build Service Account
* Kubernetes Engine Developer

I called mine gke-deployment, but you can call your Susan.

Make sure you download the key as a JSON file. You'll need this later

### Configuring the Git Repo

In Settings -> CI/CD, configure the following environment variables:

K8S_SECRET_SERVICE_ACCOUNT: Copy and paste the contents of your JSON file from the step above.
PROJECT_ID: The GCP Project ID

## Building the initial cluster

There is a `deploy` script which takes care of a lot of stuff, but if you want to do this manually:

```
# Create me a 2 node cluster with cluster name in London
gcloud container clusters create [clustername] --zone=europe-west2-b --num-nodes=2
```

Check the progress with `gcloud compute instances list`

Next create the load balancer:

```
kubectl expose deployment [appName] --type=LoadBalancer --port 80 --target-port 80
```

Keep running `kubectl get service` and wait until you get a public IP address

```[adeacon@centos7-ajd gcp-k8s]$ kubectl get service
NAME         TYPE           CLUSTER-IP    EXTERNAL-IP    PORT(S)        AGE
dsr          LoadBalancer   10.43.255.0   35.246.21.71   80:31199/TCP   15m
kubernetes   ClusterIP      10.43.240.1   <none>         443/TCP        19m
[adeacon@centos7-ajd gcp-k8s]$ 
```

From then on you can push version with `./deploy -a [appname] -v [version] -u`

# :warning: IMPORTANT!!!!! :warning:
If you run `clusters create` you will automatically be given permission to that cluster. If you running it from a different laptop (for example, a CI job), you will need to run the command `gcloud container clusters get-credentials $CLUSTER --zone=$ZONE`
