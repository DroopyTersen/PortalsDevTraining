interface LogEntry {
    message: string,
    severity: string,
}

function log(entry: LogEntry) : void {
    console.log(entry.severity, entry.message)
}

log({ severity: "Info", message: "Hey there" })