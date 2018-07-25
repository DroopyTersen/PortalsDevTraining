function log(entry) {
    console.log(entry.severity, entry.message);
}
log({ severity: "Info", message: "Hey there" });
